import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallApi } from "./useAuthen"
function DetailUser() {
    const { userId } = useParams()
    console.log(userId)
    // const [user, setUser] = useState()
    const {data} = useCallApi(`https://reqres.in/api/users/${userId}`)
    
    // useEffect (() => {
    //     fetch(`https://reqres.in/api/users/${userId}`)
    //     .then(res => res.json())
    //     .then(({data}) => setUser(data));
    // },[])

    return (
        <div>
            <h1>Detail User</h1>
            <h2>{data?.email}</h2>
            <img src={data?.avatar} />
            <h2>{data?.first_name} {data?.last_name}</h2>
        </div>
    )

}
export default DetailUser;