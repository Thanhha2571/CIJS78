import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useAuthen} from "./useAuthen"
function Header() {
    const isLogin = useAuthen()
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.setItem('isLogin', false);
        navigate("/login");
    }
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
                            {isLogin ? (<button onClick = {handleLogout}>Log out</button>) : (<NavLink to="/Login">Login</NavLink>)}
                            
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;
