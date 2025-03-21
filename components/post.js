import { useState } from "react";

export default function Post({ post, changePostText, deletePostItem }) {
  if (!post) return null; // Prevent crashes

  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // Event handler for saving the edited text
  const handleSave = async () => {
    changePostText(post.id, post.post); // You should pass the updated text
    setEditing(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex items-center justify-between pb-1 px-2 mb-3 border-b">
        <h5 className="font-semibold">{post.username}</h5>
        <span>
          {new Date(post.createdAt).toLocaleDateString("id", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </span>
      </div>

      <textarea
        name="postText"
        id="postText"
        rows={4}
        value={post.post} // Using the post prop directly here
        // value={postText}
        onChange={(e) => changePostText(post.id, e.target.value)} // Handling change externally
        // onChange={(e) => setPostText(e.target.value)}
        readOnly={!editing}
        style={{ resize: editing ? "vertical" : "none" }}
        className="w-full mb-2 px-2 py-1 text-justify text-black bg-white rounded"
      ></textarea>

      <div className="flex justify-end gap-2">
        {editing ? (
          <button
            onClick={() => setEditing(false)}
            className="w-24 py-2 bg-red-500 text-sm text-center text-white font-medium rounded cursor-pointer"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => deletePostItem(post.id)}
            className="w-24 py-2 bg-red-500 text-sm text-center text-white font-medium rounded cursor-pointer"
          >
            Delete
          </button>
        )}
        {editing ? (
          <button
            onClick={handleSave}
            className="w-24 py-2 bg-blue-500 text-sm text-center text-white font-medium rounded cursor-pointer"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="w-24 py-2 bg-blue-500 text-sm text-center text-white font-medium rounded cursor-pointer"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

// State for handling post text input
// const [postText, setPostText] = useState(post.post);
// changePostText(post.id, postText);
