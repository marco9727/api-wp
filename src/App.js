import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Details />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
