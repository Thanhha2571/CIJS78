import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function NotFound () {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        },5000)
    }, [])
    return (
        <div>
            <h1>404 Not Found</h1>
            <button>Back to home page</button>
            {/* <Link to="/" >Back to Home Page</Link> */}
        </div>
    )
}
export default NotFound;