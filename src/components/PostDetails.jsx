import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { baseApiUrl } from "../constants";

const Details = () => {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseApiUrl}/posts/${id}`).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setPost(data);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    post && (
      <div>
        <h1>{post.title.rendered}</h1>
        {/* questo div serve per mostrare il contenuto dell'articolo visto che 
        senza inserire questo codice  non si vedrebbero i dati voluti */}
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
    )
  );
};

export default Details;
