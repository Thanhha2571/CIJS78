import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCallApi } from "./useAuthen"
function ListUser() {
    // const [users, setUsers] = useState([])

    const {data = []}  = useCallApi("https://reqres.in/api/users?page=2")
    // useEffect(() => {
    //     fetch("https://reqres.in/api/users?page=2")
    //         .then(res => res.json())
    //         .then(({data}) => setUsers(data))

    // }, [])
    // console.log("ListUsers",users)
    return (
        <div>
            {data.map((data) => (
                <div>
                    <img src={data?.avatar} alt = "d" />
                    <h1>{data?.email}</h1>
                    <Link to = {`/listuser/${data?.id}`}>View</Link>
                </div>
            ))}
        </div>
    )
}

export default ListUser