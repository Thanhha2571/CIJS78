import {useState} from "react"
function LearnState () {
    
    // let [checked, setChecked] = useState(true)
    let [currentCount, setCurrentCount] = useState(0)
    

    // function kiemTraSoChan (number) {
    //     return number % 2 ===0
    // }

    function increase () {
       
        // currentCount += 1;
        setCurrentCount((prevState) => {
            return prevState +1;
        });
        // console.log(currentCount)
        // if (kiemTraSoChan(currentCount+1) === true ) {
        //     setChecked(true)
        // }else {
        //     setChecked(false)
        // }
        // console.log(checked)
    }

    
    return(
        <div>     
            <h1>day la {currentCount%2=== 0 ? "so chan" : "so le"} </h1>
            <h2>{currentCount}</h2>
            <div style = {{
                display :"flex",
                justifyContent: "center",
                
            }}>
                <button onClick = {increase} style = {{
                padding: "8px 24px"
            }}>Increase</button> 
            </div>
             
        </div>
        
    )
}
export default LearnState;