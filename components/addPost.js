"use client";

import { useRef } from "react";

export default function AddPost({ createPost }) {
  const formRef = useRef(null);

  async function handleAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const post = formData.get("post");

    if (!username || !post.trim()) {
      alert("Please enter a post.");
      return;
    }

    await createPost(post, username);

    // Use the form ref to reset instead <= ChatGPT
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} className="grid gap-2" onSubmit={handleAdd}>
      <div className="grid gap-1">
        <label htmlFor="username">Username:</label>
        <select
          name="username"
          id="username"
          className="text-black bg-white rounded"
        >
          <option value="Noel">Noel</option>
          <option value="Joe">Joe</option>
          <option value="Mark">Mark</option>
        </select>
      </div>

      <div className="grid gap-1">
        <label htmlFor="post">Post:</label>
        <textarea
          name="post"
          id="post"
          cols={30}
          rows={5}
          className="px-2 py-1 text-black bg-white rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Post
      </button>
    </form>
  );
}

// My solution did not work :v
// event.currentTarget.reset();
