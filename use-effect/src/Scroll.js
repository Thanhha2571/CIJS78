import { useEffect } from "react";
function Scroll() {
    //useEffect for handling scroll events
    useEffect(() => {
        console.log("Effect Scroll");
        const handleScroll = () => {
            const scrollTop = document.scrollingElement.scrollTop;
            console.log(scrollTop)
        };
        document.addEventListener("scroll", handleScroll)

        //Clean up the scroll
        return () => {
            // console.log("Unmounting Scroll")
            document.removeEventListener("scroll", handleScroll)
        };
    });
    return (
        <div>
            <p>ScrollTop </p>
        </div>
    )
} 
export default Scroll;