import { useState } from "react";
import validation from "../Validation/validation";
import style from "../Form/Form.module.css"

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password:""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        const validataErrors = validation({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validataErrors)
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={style.contenedor}>
            <form className={style.form} onSubmit={handelSubmit}>
                <span className={style.inputspan}>
                <label className={style.label} htmlFor="email" > Email:  </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange}/>
                </span>
                {errors.email && <p className= {style.error}>{errors.email}</p>}
                {/* <hr className= {style.hr} /> */}
                <span className={style.inputspan}>
                <label className={style.label} htmlFor="password"> Password:  </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                </span>
                {errors.password && <p className= {style.error} >{errors.password}</p>}
                {/* <hr className={style.hr}/> */}
                {/* <button className={style.submit}>Submit</button> */}
                <input className={style.submit} type="submit" value="Log in"></input>

            </form>
         </div>
    )
}

export default Form;