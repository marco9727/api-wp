import { useState } from "react";
import { baseApiUrl } from "../constants";
import { username } from "../constants";
import { password } from "../constants";
import { Form, Button } from "react-bootstrap";

const initialForm = {
  title: "",
  status: "publish",
  content: "",
};
const NewArticle = () => {
  const [form, setForm] = useState(initialForm);

  const basicAuthHeader = `Basic ` + btoa(username + ":" + password);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseApiUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuthHeader,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio delle esperienze");
        }
      })
      .then((data) => {
        console.log(data);
        window.alert("Articolo aggiunto con successo!");
        setForm(initialForm);
      })
      .catch((err) => {
        console.error("ERRORE!", err);
      });
  };

  return (
    <div>
      <h2>Crea un nuovo post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Inserisci il titolo"
            value={form.title}
            onChange={(e) => {
              setForm({
                ...form,
                title: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Contenuto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Inserisci il contenuto"
            required
            value={form.content}
            onChange={(e) => {
              setForm({
                ...form,
                content: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia Post
        </Button>
      </Form>
    </div>
  );
};

export default NewArticle;
