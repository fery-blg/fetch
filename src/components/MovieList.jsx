import Movie from "./Movie";
import { useNavigate } from "react-router-dom"
import MyMain from "./MyMain";

function MovieList({movies}) {
  const navigate = useNavigate()
  return (

    <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
     {movies.map((item, index) => {
        return <button key={index}
            onClick={() => {
                navigate(`/movie/${item.id}`)
            }}

        > <MyMain movie={item} /> </button>
    })}
    </div>
  );
}

export default MovieList;
