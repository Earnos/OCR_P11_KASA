import { Link, NavLink } from "react-router-dom"
import "../sass/layout/_header.scss"
import logo from "../assets/logo.svg"


function Header() {
     let activeStyle = {
         textDecoration: "underline",
      };

    return  (
        <>
        <header className="header" >
            <Link to="/" >
                <img src={logo} alt='logo Kaza' className="header-logo" />
            </Link>
            <nav className="header-link">
                <NavLink to="/" className="header-nav header-accueil" style={({ isActive }) => isActive ? activeStyle : undefined } >Accueil</NavLink>
                <NavLink to="/apropos" className="header-nav" style={({ isActive }) => isActive ? activeStyle : undefined } >À propos</NavLink>
            </nav>
        </header>
        </>
    )
        
}

export default Header