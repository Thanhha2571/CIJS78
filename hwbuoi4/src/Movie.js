import { useEffect, useState } from "react";
import MovieItems from "./MovieItems";
function Movie() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=85ac6156be17ea981b54c406910fdc7a&page=1&fbclid=IwAR0c-bIGNd0JXCRmeoEhrZaA-monTVZ1M2KImaJLP9iGkqUVLxh9e-Dj5EA")
            .then(res => res.json()).then(data => {
                console.log("Data",data.results);
                setMovie(data.results)
            }).catch ((err => {
                console.log("error", err)
            }))
    }, []);
    console.log("Movies",movie);
    return (
        <div>
            {movie.map((value, index) => (<MovieItems {...value}/>))}
            <MovieItems {... movie[0]} />
        </div>
    )
}
export default Movie;