import style from "./About.module.css";
import foto from "../imagen/FOTO_COSA.png"


const About = () => {

    return (
        <div className={style.about}>
            <div className={style.card}>
                <div className={style.frontcontent}>
                    <img className={style.foto} src={foto} alt=""  />
                </div>
                <div className={style.content}>
                    <h1 >SANDRA PAOLA POVEDA MARULANDA</h1>
                    <p className={style.heading}> Estudiante activa de Soy Henrry, en la cohorte WebPT13b Full Stack developer</p>
                    <p className={style.heading}> Este proyecto fue realizado con React, Redux, Express</p>
                 </div>
            </div>        
        </div>

    )
}


export default About;