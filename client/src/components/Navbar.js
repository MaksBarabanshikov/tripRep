import {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "../style/NavBar.scss"

export const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    return(
        <nav className="header__nav nav">
            <div className="nav__row row">
                <span className="nav__brand-logo text-white">Trip</span>
                <ul id="nav-mobile" className="nav__list row">
                    <li className="nav__item active"><NavLink to="/create">Home</NavLink></li>
                    <li className="nav__item"><NavLink to="/links">Buy</NavLink></li>
                    <li className="nav__item"><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}