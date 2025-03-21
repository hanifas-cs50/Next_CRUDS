"use client";

import { addPost, deletePost, editPost } from "@/actions/postActions";
import { useState } from "react";
import AddPost from "./addPost";
import Post from "./post";

export default function Posts({ posts }) {
  // State to manage the list of post items
  const [postItems, setPostItems] = useState([...posts]);

  // Function to create a new post item
  const createPost = (post, username) => {
    // Desc
    const id = (postItems.at(0)?.id || 0) + 1;
    addPost(id, post, username);
    setPostItems((prev) => [
      { id: id, post, username, createdAt: new Date() },
      ...prev,
    ]);
  };

  // Function to change the post of a post item
  const changePostText = (id, post) => {
    setPostItems((prev) =>
      prev.map((postItem) =>
        postItem.id === id ? { ...postItem, post } : postItem
      )
    );
    editPost(id, post);
  };

  // Function to delete a post item
  const deletePostItem = (id) => {
    setPostItems((prev) => prev.filter((post) => post.id !== id));
    deletePost(id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">Cruds Test</h1>

      <AddPost createPost={createPost} />

      <div className="w-full max-w-screen-sm grid mt-6 gap-2">
        <h3 className="text-lg text-center font-bold">Posts</h3>
        {postItems.map((post) => (
          <Post
            key={post.id}
            post={post}
            changePostText={changePostText}
            deletePostItem={deletePostItem}
          />
        ))}
      </div>
    </main>
  );
}

// Asc
// const id = (postItems.at(-1)?.id || 0) + 1;
