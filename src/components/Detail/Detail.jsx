import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import style from "./Detail.module.css"

const Detail =() => {
    const {id} = useParams()// objeto con la propidad id para quedame con el valor 
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div className={style.contenedor}>
            <div className={style.detalle}>
                <h2>Name: {character?.name}</h2>
                <h2>Status: {character?.status}</h2>
                <h2>Spacies: {character?.spacies}</h2>
                <h2>Gender: {character?.gender}</h2>
                <h2>Origin: {character?.origin?.name}</h2>
            </div>
            <img src={character?.image} alt={character?.name} className={style.imagen}/>
        </div>
    )
    
}

export default Detail;