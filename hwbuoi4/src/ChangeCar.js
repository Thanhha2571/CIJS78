import { useState } from "react";
function ChangeCar() {
    let [color, setColor] = useState("https://porsche-vietnam.vn/wp-content/uploads/2023/02/982-718-c7-se-modelimage-sideshot-1536x864.png")
    const maudo = () => {
      color = "https://porsche-vietnam.vn/wp-content/uploads/2021/08/982-718-c7-t-modelimage-sideshot-1536x864.png"
      setColor(color)
    }
    const mauxam = () => {
      color = "https://porsche-vietnam.vn/wp-content/uploads/2023/02/982-718-c7-se-modelimage-sideshot-1536x864.png"
      setColor(color)
    }
    return (
        <div >
            <img src={color} />
            <div style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 20
            }}>

                <button onClick={mauxam} style={{
                    padding: "8px 10px",
                    borderRadius: 8,
                    background: "gray",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    border: "none",
                    cursor: "pointer",
                }}>Màu xám</button>
                <button onClick={maudo} style={{
                    padding: "8px 10px",
                    borderRadius: 8,
                    background: "gray",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "red",
                    border: "none",
                    cursor: "pointer",
                }}>Màu đỏ</button>

            </div>
        </div>
    )
}
export default ChangeCar;