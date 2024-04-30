import SinglePost from "./SinglePost";

const PostList = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
