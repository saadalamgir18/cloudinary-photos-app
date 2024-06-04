"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function MarkFavoritActions(
  publicid: string,
  isFavorited: boolean,
  path: string
) {
  if (isFavorited) {
    await cloudinary.v2.uploader.add_tag("favorit", [publicid]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorit", [publicid]);
  }
  revalidatePath(path);
}
