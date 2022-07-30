import React, { useState,useEffect } from 'react';
import { get } from '../utils/httpClient';
//import useQuery from '../hooks/useQuery'
import  MovieCard  from './MovieCard';
import styles from './movieGrid.module.css';
import { Spinner } from './Spinner';
//import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';


function MoviesGrid({ search }){
  //let  movies  = [];
  // const moviesState = useState([]);
  // const movies = moviesState[0];
  // const setMovies = moviesState[1];
  const[movies,setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [page,setPage] =  useState(1);
  const [hasMore, setHasMore] = useState(true);
  /*A traves del query se obtiene el valor que nosotros ingresamos
  a la ruta, en este caso es search , pero tambien puede ser name, etc 
  (SE obtiene el valor del parametro ingresado)*/

 useEffect(() => {
    setisLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search +"&page" + page :
     "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setisLoading(false);
    });
  },[search,page]);

  if(!isLoading && movies.length === 0){
    return <Empty />
  };

  /*Se sustituye el if del elemento spinner , ya que siempre que se estuviera cargando una pagina nueva de la API
  se iba requerir su carga LOADER---- forma parte de infiniteScroll y se le asigna el componente Spinner para que aparezca cuando sea requerido */
  
  /*OJO: Cuando se usan propiedades de los componentes es necesario que se pongan adentro de <COMPONENTE Proprierty> las propiedades */
  
  return(
       
    <InfiniteScroll
       dataLength={movies.length}
       hasMore={hasMore}
       next={() => setPage((prevPage) => prevPage + 1)}
       loader={<Spinner />}
  >
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  </InfiniteScroll>
   
       
       

    );
}

export default MoviesGrid;