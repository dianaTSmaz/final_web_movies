import React from "react"
import styles from './Search.module.css';
import {FaSearch} from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import useQuery from '../hooks/useQuery';

/*Nota: UseHitory me permite cambiar la ruta de navegación  */

export function Search() {
    const query=useQuery();
    
    const search = query.get('search');
    
    //const [searchText, setSearchText] = useState("");  
    
    const history = useHistory();

    /*useEffect(() => {
        setSearchText(search || " ");
    }, [search]);*/

    const handleSubmit = (e) =>
    {
       e.preventDefault();  
       //history.push("/?search=" + searchText);
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
           <div className={styles.searchBox}>
            <input  
               className={styles.searchInput} 
               type='text'
               value={search??""} 
               placeholder='Title'
               aria-label='Search Movies' 
                onChange={(e) => {
                   const value = e.target.value;
                    history.push("/?search=" + value);
                }}
            />
            <FaSearch size={20} color='black' className={styles.searchButton}/>
           </div> 
        </form>
    )
}
