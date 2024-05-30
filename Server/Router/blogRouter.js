import express from "express";
import * as Ctrls from "../Controllers/blog.js";
import uploadCloud from "../Configs/cloudinary.config.js";

const blogRouter = express.Router();
blogRouter.get("/", Ctrls.getAll);
blogRouter.get("/:bid", Ctrls.getOne);
blogRouter.post("/", uploadCloud.array("images", 10), Ctrls.createBlog);
blogRouter.delete("/:bid", Ctrls.deleteBlog);

blogRouter.put("/:bid", uploadCloud.array("images", 5), Ctrls.updatedBlog);

export default blogRouter;
