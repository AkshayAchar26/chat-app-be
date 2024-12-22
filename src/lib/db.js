import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDb };
