import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    tagline: {
      type: String,
      default: "",
    },

    registrationId: {
      type: String,
      default: "",
    },

    officialEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    themeColor: {
      type: String,
      default: "#6D4CFF",
    },

    address: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "verified",
    },

    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },

    memberLimit: {
      type: Number,
      default: 100,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

export const Organization = mongoose.model("Organization", organizationSchema);