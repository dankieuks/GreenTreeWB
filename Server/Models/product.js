import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
