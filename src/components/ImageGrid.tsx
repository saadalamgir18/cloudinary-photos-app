import { SearchResult } from "@/types/types";
import React from "react";
import CloudinaryImage from "./CloudinaryImage";

function ImageGrid({ images }: { images: SearchResult[] }) {
  const MAX_COL = 4;
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COL === colIndex);
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map((result) => (
              <CloudinaryImage
                imageData={result}
                key={result.public_id}
                // src={result.public_id}
                publicid={result.public_id}
                favtags={result.tags}
                width="400"
                height="300"
                alt="an image of something"
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default ImageGrid;
