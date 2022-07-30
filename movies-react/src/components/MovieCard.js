import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./MovieCard.module.css";
//import placeholder from '../placeholder.jpg';
import { getMovieImage } from '../utils/getMovieImage';

function MovieCard({movie}){
    const imageUrl  = getMovieImage(movie.poster_path,300)
   // const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : placeholder;
    return( 
    <li className={styles.movieCard}>
        <Link to={"/movies/" +  movie.id}>
            <img 
              width={230}
              height={345}
              className = {styles.movieImage}
              src={imageUrl} 
              alt={movie.title}/>

            <div>{movie.title}</div>
          </Link>   
        </li>
    );  
}

/*Es necesario especificar el tamaño de las imagenes para evitar que cuando
se este cargando se muevan las letras y se amontonen*/

export default MovieCard;