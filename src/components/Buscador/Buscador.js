import React, { useState } from 'react';
import styles from './Buscador.module.css';
import {FaSearch} from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import BuscadorPeliculas from '../MoviesGrid/buscadorPeliculas';
import Moviesgrid from '../MoviesGrid/moviesgrid';


const Buscador = () => {
    const [inputText, setinputText] = useState("");
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + inputText) 
        //Envia a la ruta (link) el valor de inputText para despues llamarlo y redireccionar la pagina
    } 

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.inputBuscador} 
                    type="text" 
                    placeholder="Busca tu pelicula" 
                    value={inputText}
                    onChange={ (e) => { setinputText(e.target.value) } 
                }/>
                <button className={styles.botonBuscador} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

export default Buscador
