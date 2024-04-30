import { useEffect, useState } from "react";
import { baseApiUrl } from "../constants.js";
import { Link } from "react-router-dom/dist";
import PostList from "./PostList.jsx";
import SinglePost from "./SinglePost.jsx";
import Loading from "./Loading.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseApiUrl}/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("ERRORE", error));
  }, []);

  const handleDelete = (postId) => {
    // Aggiorna lo stato per rimuovere il post eliminato
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="home-container">
      <div className="text-center">
        <h1>Benvenuto nel nostro Blog</h1>
        <p>Scegli un articolo da leggere o creane uno tu!!</p>
      </div>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <Loading />
        </div>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <SinglePost key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
