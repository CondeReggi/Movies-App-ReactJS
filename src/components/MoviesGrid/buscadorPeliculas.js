import React, { useState , useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';
import { useLocation } from "react-router-dom";
import Spinner from '../spinner/spinner';

const BUSCARAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;

function useQuery() {
    return new URLSearchParams(useLocation ().search);
}

const BuscadorPeliculas = (props) => {
    const [buscadoPelicula, setbuscadoPelicula] = useState("");
    const [loading, setloading] = useState(false);

    let nombre_ruta = useQuery().get("search");
    //console.log(nombre_ruta)

    if (!nombre_ruta) {
        nombre_ruta = "mortal kombat";
    }

    useEffect(() => {
        setloading(true);

        fetch(BUSCARAPI + `${nombre_ruta}`) //+ `${props.nombre_pelicula}`
            .then( (res) => res.json())
            .then( (data) => {
                setbuscadoPelicula(data.results);
            })
        
        setloading(false);

    }, [nombre_ruta]); 

    if (!buscadoPelicula) {
        return null;
    }
    if (loading) {
        return <Spinner />;
    }
    //console.log(buscadoPelicula)

    return (
        <ul className={styles.moviesGrid}>
            {buscadoPelicula.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/> 
            ))} 
        </ul>
    )
}

export default BuscadorPeliculas
