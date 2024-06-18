import express from "express";
import * as Ctrls from "../Controllers/product.js";
import uploadCloud from "../Configs/cloudinary.config.js";
const productRouter = express.Router();
productRouter.get("/", Ctrls.getAll);
productRouter.get("/:pid", Ctrls.getOne);

productRouter.post("/", uploadCloud.array("images", 10), Ctrls.createProduct);
productRouter.put(
  "/:pid",
  uploadCloud.array("images", 5),
  Ctrls.updatedProduct
);
productRouter.delete("/:pid", Ctrls.deleteProduct);

export default productRouter;
