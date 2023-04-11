import React from "react";
function MovieItems (props) {
    console.log(props)
    const {backdrop_path, title, overview, vote_count} = props
    return (
        <div>
            <img src = {"https://image.tmdb.org/t/p/w500" + backdrop_path} alt = ""/>
            <p className = "title">{title}</p>
            <div className = "vote">Votes: {vote_count}</div>
            <div className = "overview">Over View: {overview}</div>
        </div>
    )
}
export default MovieItems;