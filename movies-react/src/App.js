import React from 'react';
import MoviesGrid from './components/MoviesGrid';
import styles from  './components/App.module.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (

    <Router>
      <header>
        <Link to='/'>
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          {/*Esta es la ruta o la apgina ne la que me mandatan los links declaradas*/}
          {/*/:movieId= elemento dinamico , porque cada movie tiene diferente Id*/}
          <Route exact path="/movies/:movieId"><MovieDetails/></Route>
          <Route  path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
   
  );
}

export default App;
