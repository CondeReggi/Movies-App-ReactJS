import React from 'react';
import Moviesgrid from '../MoviesGrid/moviesgrid';
import styles from './App.module.css';
import LandingPage from '../LandingPage/LandingPage';
import DetallesMovie from '../DetallesMovie/DetallesMovie';
import Buscador from '../Buscador/Buscador';
import BuscadorPeliculas from '../MoviesGrid/buscadorPeliculas';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    /*
    const nombre_ruta = useQuery().get("search");
    console.log(nombre_ruta)  
    */
    return (
        <Router>
            <header>
                <Link className={styles.linkcoso} to="/inicio">
                    <img className={styles.popcorn} src="http://assets.stickpng.com/images/5bb0a983554c7f08176ec099.png" alt="pop"/>
                    <h1 className={styles.titulo}>Movies</h1>
                </Link>
                <div className={styles.navbar}>
                    <div>
                        <Link to="/movies">All Movies</Link>
                    </div>
                    <Buscador/>
                </div>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <DetallesMovie />
                    </Route>
                    <Route path="/movies">
                        <LandingPage/>
                    </Route>
                    <Route path="/">
                        <BuscadorPeliculas/>
                    </Route>
                    <Route path="/inicio">
                        NULL
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
