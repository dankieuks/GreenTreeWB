import asyncHandler from "express-async-handler";

import slugify from "slugify";
import Blogs from "../Models/blog.js";

const getAll = asyncHandler(async (req, res) => {
  const blog = await Blogs.find({});
  if (blog.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Blogs found",
    });
  }
  return res.status(200).json({
    success: true,
    data: blog,
  });
});

const getOne = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  const blog = await Blogs.findById(bid);
  return res.status(200).json({
    success: blog ? true : false,
    data: blog ? blog : "Cannot found",
  });
});
const createBlog = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const newBlog = await Blogs.create(req.body);
  if (req.files && req.files.length > 0) {
    const images = req.files.map((file) => file.path);
    const uploadImage = await Blogs.findByIdAndUpdate(
      newBlog._id,
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
    data: newBlog ? newBlog : "Cannot create new Blog",
  });
});

const updatedBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const blog = await Blogs.findByIdAndUpdate(bid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: blog ? true : false,
    data: blog ? blog : "Update blog fall",
  });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  const blog = await Blogs.findByIdAndDelete(bid);
  return res.status(200).json({
    success: blog ? true : false,
    data: blog ? "Delete successfully" : "Cannot delete blog",
  });
});

const uploadImageBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  if (!req.files) throw new Error("Missing required files");
  const blog = await Blogs.findByIdAndUpdate(
    bid,
    {
      $push: { images: { $each: req.files.map((el) => el.path) } },
    },
    { new: true }
  );
  return res.status(200).json({
    success: blog ? true : false,
    data: blog ? blog : "Cannot upload ",
  });
});
export { getAll, getOne, createBlog, updatedBlog, deleteBlog, uploadImageBlog };
