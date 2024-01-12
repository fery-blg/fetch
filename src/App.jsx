import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import Formulaire from "./components/Formulaire";
import Filtre from "./components/Filtre";


function App() {
  const [filtred ,SetFiltred] = useState([])
  const [movies, SetMovies] = useState([]);
  async function getMovies() {
    const response = await fetch("http://localhost:3000/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      SetMovies(data);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Nav />
        <Filtre movies={movies} SetFiltred={SetFiltred} />
      {window.location.pathname == "/" && <MovieList movies={filtred.length > 0 ? filtred : movies} />}
      {window.location.pathname == "/new" && (
       <div style={{ display: "flex", justifyContent: "center" }} > <Formulaire /></div>
      )}
    </>
  );
}

export default App;
