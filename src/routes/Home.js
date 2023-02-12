import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )).json();
        // const json = await res.json();s
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
            {movies.map((i)=> 
            (<Movie 
            key={i.id}
            id={i.id}
            medium_cover_image={i.medium_cover_image} 
            title={i.title}
            summary={i.summary}
            genres={i.genres}/>))}
        </div>}
    </div>
  );
}

export default Home;