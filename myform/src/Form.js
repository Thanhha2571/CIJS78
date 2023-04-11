import { useState} from "react"
function Form() {
    // const [firstName, setFirstName] = useState("")
    // const [lasttName, setLasttName] = useState("")
    
    const [userInfo, setuserInfo] = useState({
        firstName: "",
        lastName : "",
    })
    // const onChangeFirstName = (event) => {
    //     setFirstName(event.target.value)
    // }

    // const onChangeLastName = (event) => {
    //     setLasttName(event.target.value)
    // }
    const onSubmit = (event) => {
        event.preventDefault( )
        const firstNameValue = event.target.firstName.value;
        const lastNameValue = event.target.lastName.value;
        const user = {
            firstName: firstNameValue,
            lastName: lastNameValue,
        }
        setuserInfo(user)
        
        // setFirstName(firstNameValue)
        // setLasttName(lastNameValue)
    }
    // console.log(userInfo)
    return (
        <form onSubmit = {onSubmit}>
            <div>
                <label>First name</label>
                <input name = "firstName" placeholder="Enter your first name"  />
            </div>
            <div>
                <label>Last name</label>
                <input name = "lastName" placeholder="Enter your last name" />
            </div>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>

    )
}
export default Form;