import { model, Schema } from "mongoose";

const imageSchema = new Schema(
  {
    key: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ImageModel = model("Image", imageSchema);

export default ImageModel;
