import { Admin } from "../models/Admin.model.js";
import { Organization } from "../models/Organization.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";

// ===============================
// COOKIE OPTIONS
// ===============================
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
};


// ===============================
// GENERATE TOKENS
// ===============================
const generateAccessAndRefreshTokens = async (adminId) => {

  const admin = await Admin.findById(adminId);

  const accessToken = admin.generateAccessToken();

  const refreshToken = admin.generateRefreshToken();

  admin.refreshToken = refreshToken;

  await admin.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};


// ===============================
// SIGNUP
// ===============================
export const signupAdmin = asyncHandler(async (req, res) => {

  const {
    fullName,
    email,
    password,
    organizationName,
  } = req.body;

  // validation
  if (
    !fullName ||
    !email ||
    !password ||
    !organizationName
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // existing admin
  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    throw new ApiError(400, "Admin already exists");
  }

  // create admin
  const admin = await Admin.create({
    fullName,
    email,
    password,
  });

  // create organization
  const organization = await Organization.create({
    name: organizationName,
    officialEmail: email,
    owner: admin._id,
  });

  // link org
  admin.organization = organization._id;

  await admin.save({ validateBeforeSave: false });

  // tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(admin._id);

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        201,
        {
          admin: {
            id: admin._id,
            fullName: admin.fullName,
            email: admin.email,
          },

          organization: {
            id: organization._id,
            name: organization.name,
          },
        },
        "Signup successful"
      )
    );
});


// ===============================
// LOGIN
// ===============================
export const loginAdmin = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    throw new ApiError(
      400,
      "Email and password required"
    );
  }

  // find admin
  const admin = await Admin.findOne({ email })
    .select("+password +refreshToken")
    .populate("organization");

  if (!admin) {
    throw new ApiError(401, "Invalid credentials");
  }

  // compare password
  const isMatch = await admin.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  // tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(admin._id);

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          admin: {
            id: admin._id,
            fullName: admin.fullName,
            email: admin.email,
          },

          organization: admin.organization,
        },
        "Login successful"
      )
    );
});


// ===============================
// LOGOUT
// ===============================
export const logoutAdmin = asyncHandler(async (req, res) => {

  const adminId = req.admin?._id;

  await Admin.findByIdAndUpdate(
    adminId,
    {
      $set: {
        refreshToken: "",
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(
      new ApiResponse(
        200,
        null,
        "Logout successful"
      )
    );
});


// ===============================
// RESET PASSWORD
// ===============================
export const resetPassword = asyncHandler(
  async (req, res) => {

    const { email } = req.body;

    if (!email) {
      throw new ApiError(400, "Email required");
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new ApiError(404, "Admin not found");
    }

    // reset link
    const resetLink =
      "http://localhost:3000/reset-password/new";

    // send email
    await sendEmail({
      to: email,

      subject: "Reset Your Password",

      html: `
        <div style="font-family:sans-serif;padding:20px;">
          
          <h2>Digital ID Password Reset 🔐</h2>

          <p>
            We received a request to reset your password.
          </p>

          <a 
            href="${resetLink}"
            style="
              display:inline-block;
              padding:12px 20px;
              background:#4f46e5;
              color:white;
              text-decoration:none;
              border-radius:8px;
              margin-top:10px;
            "
          >
            Reset Password
          </a>

          <p style="margin-top:20px;color:gray;">
            If you did not request this, please ignore this email.
          </p>

        </div>
      `,
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        null,
        "Password reset email sent successfully"
      )
    );
  }
);