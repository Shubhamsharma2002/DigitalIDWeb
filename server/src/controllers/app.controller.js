import { Member } from "../models/Member.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


// ==========      ==================         ==========
// GET MY DIGITAL ID  ...........    ............ .........
// ========  ====================     ==========                
export const getMyDigitalId = asyncHandler(
  async (req, res) => {

    const { email } = req.query;

    if (!email) {
      throw new ApiError(
        400,
        "Email is required"
      );
    }

    
    // find member .............  ....................  d..........
    const member = await Member.findOne({
      email,
    })
      .populate("organization")
      .populate("digitalId");

    if (!member) {
      throw new ApiError(
        404,
        "No digital ID found for this user"
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          member,
          digitalId: member.digitalId,
          organization: member.organization,
        },
        "  Digital ID fetched successfully  "
      )
    );
  }
);


