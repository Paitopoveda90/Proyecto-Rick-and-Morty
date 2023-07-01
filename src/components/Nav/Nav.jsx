import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";

import style from "./Nav.module.css";

const Nav = ({onSearch, access, setAccess}) => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess (false);
        navigate("/");
    }

    return (
        <nav className={style.navegador}>
            <button className={style.botones}>
                <NavLink to="/about" className={style.link}>About</NavLink>
            </button>
            <button className={style.botones}>
                <NavLink to="/home">Home</NavLink>
            </button>
            <button className={style.botones}>
                <NavLink to="/favorites">Favorites</NavLink>
            </button>
            <button className={style.botones} onClick={handleLogOut}>Log Out</button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}


export default Nav;