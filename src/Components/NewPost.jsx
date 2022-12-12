import React, { useState } from "react";
import { PostFormInfo } from "../api/auth";

export const NewPostForm = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div>
      <h3>New Post Here</h3>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            PostFormInfo(title, description, price, location, token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <input
          name="title"
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br></br>

        <input
          name="description"
          value={description}
          type="text"
          placeholder="Reason"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br></br>

        <input
          name="price"
          value={price}
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>

        <input
          name="location"
          value={location}
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
