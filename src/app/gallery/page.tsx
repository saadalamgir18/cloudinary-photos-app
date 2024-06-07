import CloudinaryImage from "@/components/CloudinaryImage";
import ImageGrid from "@/components/ImageGrid";
import UploadButton from "@/components/UploadButton";
import { SearchResult } from "@/types/types";
import cloudinary from "cloudinary";

async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .fields("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <ImageGrid images={results.resources} />
      </div>
    </section>
  );
}

export default GalleryPage;
