import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthen} from "./useAuthen"
function Login() {

    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()
    let currentPwd = "123";
    const isLogin = useAuthen();

    useEffect (() => {
        if (isLogin) {
            navigate("/")
        }
    })
    const handleLogin = () => {
        if (pwd === currentPwd) {
            localStorage.setItem("isLogin",true);
            navigate("/")
        }
        else {
            alert("Wrong password")
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" onChange={(e) => setPwd(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;