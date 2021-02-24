import * as AWS from "aws-sdk";
import { FileUpload } from "../dtos/file.upload";
import fs from "fs";

interface UploadResult {
  ok: boolean;
  error?: string;
  url?: string;
}

const BUCKET_NAME = "ninstaclone";

export const uploadFile = async (file: FileUpload): Promise<UploadResult> => {
  try {
    if (process.env.AWS_ACCESS_KEY && process.env.AWS_SECRET_KEY) {
      AWS.config.update({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY,
        },
      });
      const s3Stream = require("s3-upload-stream")(new AWS.S3());

      const { filename, createReadStream } = file;

      const readStream: fs.ReadStream = createReadStream();

      const objectName = `${Date.now()}_${filename}`;
      const upload = s3Stream.upload({
        Bucket: BUCKET_NAME,
        Key: objectName,
        ACL: "public-read",
      });
      let url;
      upload.on("error", () => {
        throw new Error("Error occured while uploading");
      });

      upload.on("part", (details) => {
        console.log("hello");
      });

      upload.on("uploaded", (details) => {
        url = details.Location;
      });

      readStream.pipe(upload);

      return {
        ok: true,
        ...(url && { url }),
      };
    } else {
      throw new Error("AWS Credential failed");
    }
  } catch (e) {
    return {
      ok: false,
      error: e.message,
    };
  }
};
