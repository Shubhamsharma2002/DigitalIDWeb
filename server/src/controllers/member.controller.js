import { Member } from "../models/Member.model.js";
import { DigitalId } from "../models/DigitalId.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import QRCode from "qrcode";
import generateCardNumber from "../utils/generateCardNumber.js";

// ======================================
// ADD MEMBER
// ======================================
export const addMember = asyncHandler(async (req, res) => {
  const organizationId = req.organization;

  const {
    fullName,
    memberId,
    email,
    phone,
    department,
    role,
    photo,
  } = req.body;

  if (!fullName || !memberId || !email || !phone || !department) {
    throw new ApiError(400, "All required fields must be filled");
  }

  const existingMember = await Member.findOne({
    organization: organizationId,
    $or: [{ memberId }, { email }],
  });

  if (existingMember) {
    throw new ApiError(400, "Member already exists");
  }

  const member = await Member.create({
    organization: organizationId,
    fullName,
    memberId,
    email,
    phone,
    department,
    role,
    photo,
  });

  const cardNumber = generateCardNumber();

  const verifyUrl = `${
    process.env.FRONTEND_URL || "http://localhost:3000"
  }/verify/${cardNumber}`;

  const qrCode = await QRCode.toDataURL(verifyUrl);

  const digitalId = await DigitalId.create({
    organization: organizationId,
    member: member._id,
    cardNumber,
    qrCode,
  });

  member.digitalId = digitalId._id;

  await member.save({
    validateBeforeSave: false,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      {
        member,
        digitalId,
      },
      "Member added successfully"
    )
  );
});

// ======================================
// GET ALL MEMBERS
// ======================================
export const getAllMembers = asyncHandler(async (req, res) => {
  const organizationId = req.organization;

  const members = await Member.find({
    organization: organizationId,
  })
    .populate("digitalId")
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, members, "Members fetched successfully")
  );
});

// ======================================
// UPDATE MEMBER
// ======================================
export const updateMember = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { fullName, phone, department, role, photo } = req.body;

  const updatedMember = await Member.findByIdAndUpdate(
    id,
    {
      $set: {
        fullName,
        phone,
        department,
        role,
        photo,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  ).populate("digitalId");

  if (!updatedMember) {
    throw new ApiError(404, "Member not found");
  }

  return res.status(200).json(
    new ApiResponse(200, updatedMember, "Member updated successfully")
  );
});

// ======================================
// TOGGLE MEMBER STATUS
// ======================================
export const toggleMemberStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const member = await Member.findById(id);

  if (!member) {
    throw new ApiError(404, "Member not found");
  }

  member.status = member.status === "active" ? "inactive" : "active";

  await member.save();

  await DigitalId.findByIdAndUpdate(member.digitalId, {
    status: member.status,
  });

  const updatedMember = await Member.findById(id).populate("digitalId");

  return res.status(200).json(
    new ApiResponse(200, updatedMember, `Member ${member.status}`)
  );
});