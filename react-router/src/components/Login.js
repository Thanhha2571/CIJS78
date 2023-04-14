import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {

    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()
    let currentPwd = "123";

    const handleLogin = () => {
        if (pwd === currentPwd) {
            setTimeout(() => {
                navigate("/");
            }, 3000);
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