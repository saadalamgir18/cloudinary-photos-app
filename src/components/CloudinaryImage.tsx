"use client";
import { CldImage, CldImageProps } from "next-cloudinary";
import Heart from "./Heart";
import { MarkFavoritActions } from "@/actions/actions";
import { useState, useTransition } from "react";
import FullHeart from "./FullHeart";
import { SearchResult } from "@/types/types";

function CloudinaryImage(
  props: {
    imageData: SearchResult;
    publicid: string;
    favtags: string[];
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imageData, onUnheart } = props;
  console.log(props.publicid);
  const [isFavorited, setFavorted] = useState(
    imageData.tags.includes("favorit")
  );

  // const isFavorited = props.favtags.includes("favorit");
  return (
    <div className="grid">
      <CldImage
        src={imageData.public_id}
        {...props}
        className="col-start-1 col-end-2 row-start-1 row-end-2"
      />
      {isFavorited ? (
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto px-2 pt-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            onUnheart?.(imageData);
            setFavorted(false);
            startTransition(() =>
              MarkFavoritActions(imageData.public_id, false)
            );
          }}
        >
          <FullHeart />
        </div>
      ) : (
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto px-2 pt-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setFavorted(true);
            startTransition(() =>
              MarkFavoritActions(imageData.public_id, true)
            );
          }}
        >
          <Heart />
        </div>
      )}
    </div>
  );
}

export default CloudinaryImage;
