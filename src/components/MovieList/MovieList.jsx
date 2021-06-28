import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieReducer);

    console.log(`movies: ${movies}`);

    // useEffect(() => {
    //     fetchMovies();
    // }, []);

    // const handleClick = () => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }

    return (
        <div>
            <div>
                {movies?.Search?.map(movie => {
                    return (
                        <div key={movie?.imdbID} >
                            <img src={movie?.Poster} alt={movie?.Title} />
                            <h2>{movie?.Title}</h2>
                            <h3>{movie?.Year}</h3>
                        </div>
                    )
                })}
            </div>
            <p>in MovieList</p>
        </div>
    )
}

export default MovieList;