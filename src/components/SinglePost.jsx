import React, { useEffect, useState } from "react";
import { baseApiUrl } from "../constants.js";
import { Link } from "react-router-dom";
import { username } from "../constants";
import { password } from "../constants";

// Componente per rappresentare singolarmente un articolo
const SinglePost = ({ post, onDelete }) => {
  const handleDelete = () => {
    const basicAuthHeader = `Basic ` + btoa(username + ":" + password);

    fetch(`${baseApiUrl}/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        Authorization: basicAuthHeader,
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("cancellato con successo");
          onDelete(post.id);
        } else {
          throw new Error("errore nella cancellazione");
        }
      })
      .catch((error) => {
        console.error("Errore nella richiesta di cancellazione:", error);
      });
  };

  return (
    <li className="post-item">
      <div className="post-content">
        <Link to={`/posts/${post.id}`} className="post-link">
          {post.title.rendered}
        </Link>
      </div>
      <div className="button-container">
        <button onClick={handleDelete} className="delete-button">
          Elimina
        </button>
      </div>
    </li>
  );
};

export default SinglePost;
