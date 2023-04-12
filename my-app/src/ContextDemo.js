import { createContext, useState, useEffect } from "react"

export const ContextDemo = createContext()

export const ContextDemoProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log("Use Effect")
        fetch("https://61ebae077ec58900177cdd0b.mockapi.io/nft")
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, []);
    const handleCounter = () => {
        setCounter(counter + 1);
    }
    return <ContextDemo.Provider value={{
        products,
        counter,
        handleCounter,
    }}>
        {children}
    </ContextDemo.Provider>
}