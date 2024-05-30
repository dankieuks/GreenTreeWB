import express from "express";
import * as Ctrls from "../Controllers/product.js";
import uploadCloud from "../Configs/cloudinary.config.js";
const productRouter = express.Router();
productRouter.get("/", Ctrls.getAll);
productRouter.get("/:pid", Ctrls.getOne);
productRouter.put(
  "/uploadimage/:pid",
  uploadCloud.array("images", 5),
  Ctrls.uploadImageProduct
);
productRouter.post("", uploadCloud.array("images", 10), Ctrls.createProduct);
productRouter.put("/:pid", Ctrls.updatedProduct);
productRouter.delete("/:pid", Ctrls.deleteProduct);

export default productRouter;
