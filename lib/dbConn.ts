import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.DB_URI;

if (!MONGO_URI) {
  throw new Error("DB_URI is missing in environment variables!");
}

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    return `Error: ${error}`;
  }
};