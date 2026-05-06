import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    memberId: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "teacher", "employee", "admin"],
      default: "student",
    },

    photo: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    digitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DigitalId",
    },
  },
  { timestamps: true }
);

memberSchema.index({ organization: 1, memberId: 1 }, { unique: true });
memberSchema.index({ organization: 1, email: 1 }, { unique: true });

export const Member = mongoose.model("Member", memberSchema);