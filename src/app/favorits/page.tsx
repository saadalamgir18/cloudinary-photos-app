import CloudinaryImage from "@/components/CloudinaryImage";
import { SearchResult } from "@/types/types";
import cloudinary from "cloudinary";
async function FavoritPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorit")
    .sort_by("public_id", "desc")
    .fields("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorits Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              path="/favorits"
              key={result.public_id}
              src={result.public_id}
              publicid={result.public_id}
              favtags={result.tags}
              width="400"
              height="300"
              alt="an image of something"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavoritPage;
