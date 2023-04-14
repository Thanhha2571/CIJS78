import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function DetailUser () {
    const  {userId} = useParams()
    const [user, setUser] = useState()

    useEffect (() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then(res => res.json())
        .then(({data}) => setUser(data));
    },[])
    
    if (user) {
        return (
            <div>
                <h1>Detail User</h1>
                <h2>{user.email}</h2>
                <img src = {user.avatar}/>
                <h2>{user.first_name} {user.last_name}</h2>
            </div>
        )
    }
}
export default DetailUser;