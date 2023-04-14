import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"; 
import "./ProjectItem.css"
function DetailNft () {
    const {id} = useParams();
    const [nft, setNft] = useState([]);

    useEffect (() => {
        fetch(`https://61ebae077ec58900177cdd0b.mockapi.io/nft/${id}`)
            .then(res => res.json())
            .then((data) => {
                setNft(data)
            })
    }, []);
    
    return (
        <div>
            <h1 style={{
                marginTop:"100px"
            }}>Detail NFT</h1>
            <img  style={{
                marginTop:"200px",
                width:"500px",
                height:"500px",
                margin: "auto",
            }} src ={nft?.url} alt=""/>
            <h2 className="project-title" style={{
                marginTop:"100px"
            }}>{nft?.name}</h2>
        </div>
    )
}

export default DetailNft;