import {Outlet, Navigate} from 'react-router-dom';
import { useAuthen} from "./useAuthen"
function PrivateRoutes () {
    const isLogin = useAuthen()

    return isLogin ? <Outlet /> : <Navigate to = "/login" />;  
}

export default PrivateRoutes;