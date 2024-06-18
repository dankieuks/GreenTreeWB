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
  limits: {
    fieldNameSize: 100, // Giới hạn kích thước tên trường
    fieldSize: 1024 * 1024, // Giới hạn kích thước giá trị trường (1MB)
    fileSize: 10 * 1024 * 1024, // Giới hạn kích thước tệp (10MB)
  },
});

export default uploadCloud;
