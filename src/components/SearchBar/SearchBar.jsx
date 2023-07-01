import { useState } from "react";

import style from "./SearchBar.module.css"

   const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("")

   const handleChange = (event) => {
// event.target.value  => permite interactuar con lo que ingrese el usuario al input 
      setId(event.target.value)
      
      
}

   return (
      <div className = {style.search}>
         <input className = {style.input} type='search' onChange={handleChange} value = {id} placeholder="Buscar..."/>
         <button className = {style.boton} onClick={() => {onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}

export default SearchBar;