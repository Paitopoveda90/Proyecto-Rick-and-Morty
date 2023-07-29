import style from "./About.module.css";
import foto from "../imagen/FOTO_COSA.png"


const About = () => {

    return (
        <div className={style.about}>
            <img className={style.foto} src={foto} alt=""  />
            <h1 >SANDRA PAOLA POVEDA MARULANDA</h1>
            <p> Estudiante activa de Soy Henrry, en la cohorte WebPT13b Full Stack developer</p>
        </div>

    )
}


export default About;