import "./ChangeColor.css";
import {useState} from 'react';
function ChangeColor () {
    let [color, setColor] = useState("blue")
    const RanColor = () => {
        const r = Math.floor(Math.random()*255)
        const g = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)
        setColor(`rgb(${r}, ${g}, ${b})`)
        console.log(color)

    }
    return (
        <div onClick = {RanColor} className = "box"
        style = {{
            backgroundColor : color
        }}></div>
    )
}
export default ChangeColor;