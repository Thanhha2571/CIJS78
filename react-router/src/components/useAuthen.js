import { useState, useEffect } from "react";
export function useAuthen () {
    return JSON.parse(localStorage.getItem("isLogin"));
    
}

export const useCallApi = (url) => {
    const [data, setData] = useState();

    useEffect (() => {
        fetch(url)
        .then ((res) => res.json())
        .then ((data) => setData(data))
    }, []);

    if (data === undefined) {
        return [];
    }
    return data;
}