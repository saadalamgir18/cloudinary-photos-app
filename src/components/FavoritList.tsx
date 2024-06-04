"use client";
import React, { useEffect, useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import { SearchResult } from "@/types/types";

function FavoritList({ results }: { results: { resources: SearchResult[] } }) {
  const [initialresults, setResults] = useState(results);
  return (
    <div className="grid grid-cols-4 gap-4">
      {results.resources.map((result: SearchResult) => (
        <CloudinaryImage
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
  );
}

export default FavoritList;
