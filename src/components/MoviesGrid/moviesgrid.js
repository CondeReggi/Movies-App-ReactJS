import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';

const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3`;
const BUSCARAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`
/*
function useQuery() {
    return new URLSearchParams(useLocation().search)
}
*/
const Moviesgrid = () => {

    const [movies, setMovies] = useState([]);

    //const nombre_ruta = useQuery().get("search");
    //console.log("este es el nombre" + nombre_ruta)

    useEffect(() => {
        fetch(APIURL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}

export default Moviesgrid
