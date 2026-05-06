import { Organization } from "../models/Organization.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


// ======================================
// GET ORGANIZATION
// ======================================
export const getOrganization = asyncHandler(
  async (req, res) => {

    const organizationId = req.organization;

    const organization = await Organization.findById(
      organizationId
    );

    if (!organization) {
      throw new ApiError(
        404,
        "Organization not found"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        organization,
        "Organization fetched successfully"
      )
    );
  }
);


// ======================================
// UPDATE ORGANIZATION
// ======================================
export const updateOrganization = asyncHandler(
  async (req, res) => {

    const organizationId = req.organization;

    const {
      name,
      tagline,
      registrationId,
      officialEmail,
      contactNumber,
      logo,
      themeColor,
      address,
      website,
    } = req.body;

    const organization =
      await Organization.findByIdAndUpdate(
        organizationId,
        {
          $set: {
            name,
            tagline,
            registrationId,
            officialEmail,
            contactNumber,
            logo,
            themeColor,
            address,
            website,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!organization) {
      throw new ApiError(
        404,
        "Organization not found"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        organization,
        "Organization updated successfully"
      )
    );
  }
);