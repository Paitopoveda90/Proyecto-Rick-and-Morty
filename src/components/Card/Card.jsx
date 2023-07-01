import { NavLink} from "react-router-dom";
import style from "./Card.module.css" 
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


 
 function Card ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite =() =>{
      if(isFav){
         setIsFav(false);
         removeFav (id);
      }
      else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      if (Array.isArray(myFavorites))
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id ]);

   return (

      <div className={style.contenedor}> 

         <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍"}</button>

            <img src={image} alt=''/>
            <div>
               <NavLink to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2>  
               </NavLink>
            </div>

            <div className={style.elementos}>
               <h2>Statu: {status}</h2>
               <h2>Species: {species}</h2> 
               <h2>Gender: {gender}</h2>
               <h2>Origin: {origin}</h2>
            </div>
            
            <div>
               <button className={style.boton} onClick={() => onClose (id)}>
               <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
               </button>
            </div>
      </div>
   );
}

const mapStateToProps= (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

 const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
 }

export default connect (
   mapStateToProps,
   mapDispatchToProps)
   (Card);