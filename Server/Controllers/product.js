import asyncHandler from "express-async-handler";
import Products from "../Models/product.js";
import slugify from "slugify";

const getAll = asyncHandler(async (req, res) => {
  const product = await Products.find({});
  if (product.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found",
    });
  }
  return res.status(200).json({
    success: true,
    data: product,
  });
});

const getOne = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const product = await Products.findById(pid);
  return res.status(200).json({
    success: product ? true : false,
    data: product ? product : "Cannot found",
  });
});
const createProduct = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const newProduct = await Products.create(req.body);
  if (req.files && req.files.length > 0) {
    const images = req.files.map((file) => file.path);
    const uploadImage = await Products.findByIdAndUpdate(
      newProduct._id,
      {
        images: images,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true ? true : false,
      data: uploadImage ? uploadImage : "Cannot uploadImage",
    });
  }
  return res.status(200).json({
    success: true ? true : false,
    data: newProduct ? newProduct : "Cannot create new Product",
  });
});

const updatedProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const product = await Products.findByIdAndUpdate(pid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: product ? true : false,
    data: product ? product : "Update product fall",
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const product = await Products.findByIdAndDelete(pid);
  return res.status(200).json({
    success: product ? true : false,
    data: product ? "Delete successfully" : "Cannot delete product",
  });
});

const uploadImageProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  if (!req.files) throw new Error("Missing required files");
  const product = await Products.findByIdAndUpdate(
    pid,
    {
      $push: { images: { $each: req.files.map((el) => el.path) } },
    },
    { new: true }
  );
  return res.status(200).json({
    success: product ? true : false,
    data: product ? product : "Cannot upload ",
  });
});
export {
  getAll,
  getOne,
  createProduct,
  updatedProduct,
  deleteProduct,
  uploadImageProduct,
};
