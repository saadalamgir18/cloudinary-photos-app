"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="gh5xhmhk" />
    </main>
  );
}
