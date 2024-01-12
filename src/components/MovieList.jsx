import MyMain from "./MyMain";

function MovieList({movies}) {
    console.log(movies)
  return (
    <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
      {movies.map((e, i) => {
    return    <div style={{
        padding:"25px"
    }} key={i}>
          <MyMain movie={e}  />
        </div>;
      })}
    </div>
  );
}

export default MovieList;
