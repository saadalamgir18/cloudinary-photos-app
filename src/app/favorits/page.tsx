import FavoritList from "@/components/FavoritList";
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
        <FavoritList results={results} />
      </div>
    </section>
  );
}

export default FavoritPage;
