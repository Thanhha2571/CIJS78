import "./Header.css";
import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";
import { NavLink } from "react-router-dom"
function Header() {
    // const { counter } = props
    const { counter } = useContext(ContextDemo)
    return (
        <div className = "header">
            <nav id="navbar">
                <ul className="nav">
                    <li className="logo">
                        <a >mindX School</a>
                    </li>
                    <li className="item">
                        <NavLink to="/welcome-section">About</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/projects">Project</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/item">{counter}</NavLink>
                    </li>
                    <li className="item">
                        <img style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "white",
                            marginTop: "12px",
                        }} src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png" />
                    </li>
                    <li className="item button"><a href="#">Log In</a></li>
                    <li className="item button secondary"><a href="#">Sign Up</a></li>
                </ul>
            </nav>
        </div>

    )
}
export default Header