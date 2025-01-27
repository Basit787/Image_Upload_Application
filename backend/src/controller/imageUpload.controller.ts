import type { Context } from "hono";
import { excludeField } from "../constants/excludeFields.js";
import { s3DeleteImage, s3GetImage, s3SaveImage } from "../lib/s3.js";
import ImageModel from "../models/image.model.js";
import { createKey, getMb } from "../utils/helper.js";

//upload image
export const imageUpload = async (c: Context) => {
  try {
    const data = await c.req.parseBody();
    const file = data.image as File;
    const buffer = await file.arrayBuffer();

    const param = {
      Key: createKey(file.name),
      Body: Buffer.from(buffer),
    };

    const modelData = new ImageModel({
      key: param.Key,
      size: getMb(file.size),
      type: file.type,
      name: file.name,
    });
    const savedData = await modelData.save();
    if (!savedData) {
      return c.json({ error: "upload image failed" }, 400);
    }

    await s3SaveImage(param);

    return c.json({ message: "Image uploaded successfully", savedData }, 201);
  } catch (error) {
    return c.json({ message: "upload image failed", error }, 500);
  }
};

//get all images
export const getAllImages = async (c: Context) => {
  try {
    const result = await ImageModel.find().select(excludeField);
    if (!result) return c.json({ error: "Failed to get images" }, 404);
    for (const obj of result) {
      const url = await s3GetImage(obj.key!);
      obj.url = url;
    }
    return c.json({ error: "Images fetched sucessfully", result }, 200);
  } catch (error) {
    return c.json({ message: "upload image failed", error }, 500);
  }
};

//get single image
export const getSingleImage = async (c: Context) => {
  const id = c.req.param("id");
  try {
    const result = await ImageModel.findOne({ _id: id }).select(excludeField);
    if (!result) return c.json({ error: "Failed to get images" }, 404);

    const url = await s3GetImage(result.key!);
    result.url = url;

    return c.json({ message: "Images fetched sucessfully", result }, 200);
  } catch (error) {
    return c.json({ message: "upload image failed", error }, 500);
  }
};

//delete image
export const deleteImage = async (c: Context) => {
  const id = c.req.param("id");

  try {
    const result = await ImageModel.findOne({ _id: id }).select(excludeField);
    if (!result) return c.json({ error: "Failed to get images" }, 404);

    const deleteData = await ImageModel.findByIdAndDelete({ _id: id });
    if (!deleteData) {
      return c.json({ message: "Failed to delete image" }, 400);
    }

    const sendData = await s3DeleteImage(result.key!);

    if (!sendData) {
      return c.json({ error: "upload image failed" }, 400);
    }

    return c.json(
      { message: "Images deleted sucessfully", result: deleteData },
      200
    );
  } catch (error) {
    return c.json({ message: "Failed to fetch single image", error }, 500);
  }
};
