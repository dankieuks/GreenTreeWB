import { config } from "dotenv";
import mongoose from "mongoose";
config();
const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connect DB successfully ");
  } catch (error) {}
};
export default dbConnect;
