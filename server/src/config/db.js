import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.URI;

    if (!uri) {
      throw new Error("MongoDB URI is missing!");
    }

    console.log("⏳ Connecting to MongoDB...");

    const connection = await mongoose.connect(uri);

    console.log(
      `✅ MongoDB Connected: ${connection.connection.host}`
    );

  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(error.message);

    process.exit(1); // local dev ke liye better
  }
};

export default connectDB;