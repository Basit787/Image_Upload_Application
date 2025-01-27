import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const Bucket = process.env.AWS_BUCKET!;
const region = process.env.AWS_REGION!;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;

//s3 client
export const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

//save image in s3
export const s3SaveImage = async ({
  Key,
  Body,
}: {
  Key: string;
  Body: Buffer;
}) => {
  try {
    const uploadImage = new PutObjectCommand({ Bucket, Key, Body });
    return await s3.send(uploadImage);
  } catch (error) {
    throw new Error("Failed while saving image", error as Error);
  }
};

//get image in s3
export const s3GetImage = async (Key: string) => {
  try {
    const command = new GetObjectCommand({ Bucket, Key });
    return await getSignedUrl(s3, command);
  } catch (error) {
    throw new Error("Failed while fetching image", error as Error);
  }
};

//delete image in s3
export const s3DeleteImage = async (Key: string) => {
  try {
    const command = new DeleteObjectCommand({ Bucket, Key });
    return await s3.send(command);
  } catch (error) {
    throw new Error("Failed while deleting image", error as Error);
  }
};
