import "./Header.css";
import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";
function Header() {
    // const { counter } = props
    const {counter} = useContext(ContextDemo) 
    return (
        <nav id="navbar">
            <ul className="nav">
                <li className="logo">
                    <a href="#logo">mindX School</a>
                </li>
                <li className="item">
                    <a href="#welcome-section">About</a>
                </li>
                <li className="item">
                    <a href="#projects">Project</a>
                </li>
                <li className="item">
                    <a href="#contact">Contact</a>
                </li>
                <li className="item">
                    <a href="#projects">{counter}</a>
                </li>
                <li className="item">
                    <img style = {{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "white",
                        marginTop: "12px",
                    }} src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png"/>
                </li>
                <li className="item button"><a href="#">Log In</a></li>
                <li className="item button secondary"><a href="#">Sign Up</a></li>
            </ul>
        </nav>
    )
}
export default Header