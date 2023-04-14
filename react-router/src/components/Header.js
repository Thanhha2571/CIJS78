import { NavLink, useParams, useNavigate } from "react-router-dom";
function Header() {
    return (
        <div>
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <NavLink style={({isActive}) =>
                        isActive ? {color :"red"}: undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/listuser">ListUser</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;
