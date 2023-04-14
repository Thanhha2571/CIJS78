import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function ListUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(({data}) => setUsers(data))

    }, [])
    // console.log("ListUsers",users)
    return (
        <div>
            {users.map((user) => (
                <div>
                    <img src={user.avatar} alt = "d" />
                    <h1>{user.email}</h1>
                    <Link to = {`/listuser/${user.id}`}>View</Link>
                </div>
            ))}
        </div>
    )
}

export default ListUser