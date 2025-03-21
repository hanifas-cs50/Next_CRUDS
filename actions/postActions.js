"use server";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/";
import { post } from "@/lib/db/schema";

export const getData = async (filter) => {
  var data;
  if (filter === "All") {
    data = await db.select().from(post).orderBy(desc(post.createdAt));
  } else {
    data = await db
      .select()
      .from(post)
      .where(eq(post.username, filter))
      .orderBy(desc(post.createdAt));
  }
  return data;
};

export const addPost = async (id, postText, username) => {
  await db.insert(post).values({
    id: id,
    post: postText,
    username: username,
  });
};

export const deletePost = async (id) => {
  await db.delete(post).where(eq(post.id, id));

  revalidatePath("/");
};

export const editPost = async (id, postText) => {
  await db
    .update(post)
    .set({
      post: postText,
    })
    .where(eq(post.id, id));

  revalidatePath("/");
};
