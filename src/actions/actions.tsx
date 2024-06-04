"use server";
import cloudinary from "cloudinary";

export async function MarkFavoritActions(
  publicid: string,
  isFavorited: boolean
) {
  if (isFavorited) {
    await cloudinary.v2.uploader.add_tag("favorit", [publicid]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorit", [publicid]);
  }
}
