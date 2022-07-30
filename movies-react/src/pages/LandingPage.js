import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import useQuery from "../hooks/useQuery";

/*Este es el componente padre de Search y MoviesGrid, por lo cual
puede ser usado para reiniciar los elementos necesarios del useEffect de MoviesGrid
¿Què se realizò? Se pasaron los componnte que extraen los valores de la busqueda para reiniciarlos y pasar ese valor limpio a moviesGrid (hereda search) */

function LandingPage(){
  
  const query = useQuery();
  const search = query.get("search");
  
  const debouncedSearch = useDebounce(search,300)
  return( 
  <div>
    <Search /> 
    <MoviesGrid  key={debouncedSearch} search={debouncedSearch}/>
  </div>
 );
}

export default LandingPage;