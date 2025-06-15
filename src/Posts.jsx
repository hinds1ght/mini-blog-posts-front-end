import { useAuth } from "../utils/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PostsCard from "./PostsCard"; // separate component
import "./Posts.css"; // optional: for styling

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      if (page > 10) return; // Stop after page 10
      setLoadingPosts(true);
      try {
        const res = await fetch(`http://localhost:2025/api/posts?page=${page}`, {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const newPosts = await res.json();

        // Filter out duplicates
        setPosts(prev => {
          const existingIds = new Set(prev.map(p => p.id));
          const filtered = newPosts.filter(p => !existingIds.has(p.id));
          return [...prev, ...filtered];
        });
      } catch (error) {
        console.log("fetchPosts error", error);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
  }, [page, token]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loadingPosts
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingPosts]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      {posts.map(post => (
        <PostsCard key={post.id} post={post} />
      ))}
      {loadingPosts && <p>Loading more posts...</p>}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Posts;
