import mongoose from "mongoose";
import "dotenv/config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
  } catch (error) {
    throw new Error("Failed to connect database", error as Error);
  }
};
