import "./Posts.css";

function PostsCard({ post }) {
  const handleClick = () => {
    alert(`Post ID: ${post.id}\n\n${post.title}`);
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostsCard;
