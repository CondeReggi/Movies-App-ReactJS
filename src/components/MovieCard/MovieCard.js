import React from 'react';
import styles from './MovieCard.module.css'; 
import { Link } from 'react-router-dom'; 

const MovieCard = ({ movie }) => {
    
    let imagen = "";
    
    if (movie.poster_path) {
        imagen = 'https://image.tmdb.org/t/p/w300' + movie.poster_path 
    }else{
        imagen = 'https://image.tmdb.org/t/p/w500/iHuEz7LNnOcWbHIXQRs4zCmmyId.jpg'; 
    }

    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={imagen} alt={movie.title}/>
                {movie.title}
            </Link>
        </li>
    )
}

export default MovieCard
