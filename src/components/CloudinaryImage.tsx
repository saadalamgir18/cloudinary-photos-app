"use client";
import { CldImage } from "next-cloudinary";
import Heart from "./Heart";
import { MarkFavoritActions } from "@/actions/actions";
import { useTransition } from "react";
import FullHeart from "./FullHeart";

function CloudinaryImage(
  props: any & { publicid: string; favtags: string; path: string }
) {
  const [transition, startTransition] = useTransition();
  const isFavorited = props.favtags.includes("favorit");
  return (
    <div className="grid">
      <CldImage
        {...props}
        className="col-start-1 col-end-2 row-start-1 row-end-2"
      />
      {isFavorited ? (
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto px-2 pt-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() =>
              MarkFavoritActions(props.publicid, false, props.path)
            );
          }}
        >
          <FullHeart />
        </div>
      ) : (
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto px-2 pt-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() =>
              MarkFavoritActions(props.publicid, true, props.path)
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
