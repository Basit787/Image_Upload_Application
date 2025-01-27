import { Hono } from "hono";
import * as image from "../controller/imageUpload.controller.js";
import { validationMiddleware } from "../middleware/imageValidation.middleware.js";
import { ImageValidation } from "../zod/imageValidation.js";

export const imageRoute = new Hono();

imageRoute.post(
  "/uploadImage",
  validationMiddleware(ImageValidation),
  image.imageUpload
);
imageRoute.get("/getAllImages", image.getAllImages);
imageRoute.get("/getSingleImage/:id", image.getSingleImage);
imageRoute.delete("/deleteImage/:id", image.deleteImage);
