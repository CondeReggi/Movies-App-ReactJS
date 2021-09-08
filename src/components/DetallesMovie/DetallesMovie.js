import React, { useState , useEffect } from 'react';
import styles from './DetallesMovie.module.css';
import { Link } from 'react-router-dom'; 
import { useParams } from "react-router";

const DetallesMovie = () => {
    const [movie, setDetalle] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=6ad69e7615be6b9cebc215b03db54da4";
        fetch(url).then(res => res.json()).then(data => {
            setDetalle(data);
        })
    }, [movieId])

    if (!movie) {
        return null;
    }
    const imagen = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

    return (
        <div className={styles.contenedorDetalles}>
            <img className={`${styles.columna} ${styles.movieImage}`} src={imagen} alt={movie.title}/>
            <div className={`${styles.columna} ${styles.divDetalles}`}>
                <p><strong>Titulo: {movie.title}</strong></p>
                <p><strong>Descripcion:</strong> {movie.overview}</p>
                <p><strong>Generos: </strong>{" "}
                    {movie.genres.map( (genero) => genero.name ).join(" , ")}
                </p>
            </div>
        </div>
    )
}

export default DetallesMovie
