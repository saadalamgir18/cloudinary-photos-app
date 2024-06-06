"use client";
import React, { useEffect, useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import { SearchResult } from "@/types/types";

function FavoritList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [results, setResults] = useState(initialResources);
  useEffect(() => {
    setResults(initialResources);
  }, [initialResources]);
  return (
    <div className="grid grid-cols-4 gap-4">
      {results?.map((result: SearchResult) => (
        <CloudinaryImage
          key={result.public_id}
          imageData={result}
          // src={result.public_id}
          publicid={result.public_id}
          favtags={result.tags}
          width="400"
          height="300"
          alt="an image of something"
          onUnheart={(unheartedResource) => {
            setResults((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
      ))}
    </div>
  );
}

export default FavoritList;
