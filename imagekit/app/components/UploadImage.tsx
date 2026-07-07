"use client";

import {
  upload,
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitUploadNetworkError,
  ImageKitServerError,
} from "@imagekit/next";

import { useRef, useState } from "react";

const UploadImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const abortController = new AbortController();

  // Get authentication data from backend
  const authenticator = async () => {
    const response = await fetch("/api/upload-auth");

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    return await response.json();
  };

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;

    if (!fileInput?.files?.length) {
      alert("Please select a file");
      return;
    }

    const file = fileInput.files[0];

    try {
      setUploading(true);

      const { signature, expire, token, publicKey } =
        await authenticator();

      const result = await upload({
        file,
        fileName: file.name,

        signature,
        token,
        expire,
        publicKey,

        abortSignal: abortController.signal,

        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
      });

      console.log(result);

      setUploadedUrl(result.url);

      alert("Upload Successful");
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.log("Upload aborted");
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.log(error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.log(error.message);
      } else if (error instanceof ImageKitServerError) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md space-y-4 rounded-lg border p-5">

      <input
        type="file"
        ref={fileInputRef}
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      <progress
        value={progress}
        max={100}
        className="w-full"
      />

      <p>{progress.toFixed(0)}%</p>

      {uploadedUrl && (
        <div>
          <p className="font-semibold">Uploaded Image</p>

          <img
            src={uploadedUrl}
            alt="Uploaded"
            className="mt-2 rounded"
          />

          <p className="mt-2 break-all text-sm">
            {uploadedUrl}
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;