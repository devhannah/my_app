import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();
    // const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies()
    }, []);
  console.log(movies);
  return (
   <div>
    {loading ? 
      <h1> Loading... </h1> : 
      <div>
        {movies.map((i,id)=> 
        <div key={i.id}>
          <img src={i.medium_cover_image}></img>
          <h2>{i.title}</h2>
          {/* <p>{i.summary}</p> */}
            <ul>
              { i.genres !== null ? i.genres.map((g) => <li key={g}>{g}</li>) : null}
            </ul>
        </div>)}
      </div>}
   </div>
  );
}

export default App;
