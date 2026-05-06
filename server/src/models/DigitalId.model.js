import mongoose from "mongoose";

const digitalIdSchema = new mongoose.Schema(
  {
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },

    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
      unique: true,
    },

    cardNumber: {
      type: String,
      required: true,
      unique: true,
    },

    qrCode: {
      type: String,
      default: "",
    },

    templateType: {
      type: String,
      default: "default",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "expired"],
      default: "active",
    },

    issuedAt: {
      type: Date,
      default: Date.now,
    },

    expiresAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export const DigitalId = mongoose.model("DigitalId", digitalIdSchema);