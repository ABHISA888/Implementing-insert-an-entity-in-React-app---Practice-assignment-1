// src/components/AddBook.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, author, description, coverImage });
    navigate("/");
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;