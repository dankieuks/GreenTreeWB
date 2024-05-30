import express from "express";
import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";
import blogRouter from "./blogRouter.js";

const initRoute = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/blog",blogRouter);
  
};
export default initRoute;
