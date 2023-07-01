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
            <form onSubmit={handelSubmit}>
                <label className={style.label} htmlFor="email" >Email:  </label>
                <input className= {style.input} type="text"  name="email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p className= {style.error}>{errors.email}</p>}
                <hr className= {style.hr} />
                <label className={style.label} htmlFor="password">Password:  </label>
                <input className= {style.input} type="password" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p className= {style.error} >{errors.password}</p>}
                <hr className={style.hr}/>
                <button className={style.submit}>Submit</button>

            </form>
        </div>
    )
}

export default Form;