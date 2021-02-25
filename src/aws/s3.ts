import * as AWS from "aws-sdk";
import { FileUpload } from "../dtos/file.upload";
import fs from "fs";

interface UploadResult {
  ok: boolean;
  error?: string;
  url?: string;
}

const BUCKET_NAME = "ninstaclone";

// FileUpload from dto/file.upload.ts
export const uploadFile = async (file: FileUpload): Promise<UploadResult> => {
  try {
    // credential config.
    if (process.env.AWS_ACCESS_KEY && process.env.AWS_SECRET_KEY) {
      AWS.config.update({
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY,
        },
      });

      // s3-upload-stream package, WriteStream for S3
      const s3Stream = require("s3-upload-stream")(new AWS.S3());

      const { filename, createReadStream } = file;

      const readStream: fs.ReadStream = createReadStream();

      const objectName = `${Date.now()}_${filename}`;
      const upload = s3Stream.upload({
        Bucket: BUCKET_NAME,
        Key: objectName,
        ACL: "public-read",
      });

      // handle events for s3-upload-stream

      readStream.pipe(upload);

      const end = new Promise<string | null>((resolve, reject) => {
        upload.on("error", () => {
          reject("Error occured on file uploading");
        });

        upload.on("uploaded", (details) => {
          resolve(details.Location);
        });
      });
      const url = await end;
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
