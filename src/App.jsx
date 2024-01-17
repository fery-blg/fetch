import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import Formulaire from "./components/Formulaire";
import Filtre from "./components/Filtre";
import { Routes , Route ,useLocation} from "react-router-dom";
import Movie from './components/Movie'



function App() {
  const [filtred ,SetFiltred] = useState([])
  const [movies, SetMovies] = useState([]);
  const location = useLocation()

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
      { !location.pathname.split('/').includes('movie') && <Filtre movies={movies} setFiltred={SetFiltred} />}

      <Routes>
        <Route path="/" element={<MovieList movies={filtred.length > 0 ? filtred : movies}/>}></Route>
        <Route path="/new" element={<Formulaire />}></Route>
        <Route path="/movie/:id" element={< Movie/>}></Route>

      </Routes>
      
    </>
  );
}

export default App;
