import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

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
                <Link to="/about" className={style.link}>About</Link>
            </button>
            <button className={style.botones}>
                <Link to="/home" className={style.link}>Home</Link>
            </button>
            <button className={style.botones}>
                <Link to="/favorites" className={style.link}>Favorites</Link>
            </button>
            <button className={style.botones} onClick={handleLogOut}>Log Out</button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}


export default Nav;