import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "GreenTree",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const uploadCloud = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB
    files: 5, // Số lượng tệp tối đa
  },
});

export default uploadCloud;
