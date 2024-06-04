"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="gh5xhmhk" />
      {/* <CldImage
        width="400"
        height="300"
        src="jtfpxzbhwbhno1rw4v9p"
        sizes="100vw"
        alt="Description of my image"
      /> */}
    </main>
  );
}
