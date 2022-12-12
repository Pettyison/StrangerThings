import { useState, useEffect } from "react";

export const PostsView = ({ posts, token }) => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      setFilteredPosts(
        posts.filter((post) => new RegExp(search, "i").test(post.title))
      );
    }
  }, [search, posts]);

  return (
    <div>
      <div className="Search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {token && posts.length ? (
        filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <h2>no post brother</h2>
      )}
    </div>
  );
};

export const PostCard = ({ post }) => {
  return (
    <div className="listing">
      <p>Title: {post.title}</p>
      <p>: {post.description}</p>
      <p>Price: {post.price}</p>
      <p>Seller: {post.author.username}</p>
      <p>Location: {post.location}</p>
    </div>
  );
};
