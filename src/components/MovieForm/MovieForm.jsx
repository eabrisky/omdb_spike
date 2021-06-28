import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [movieQuery, setMovieQuery] = useState('');

    const query = {
        query: movieQuery
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(`Movie(s) we're looking for (query.query): ${query.query}`);

        dispatch({
            type: 'GET_MOVIES',
            payload: query
        })

        setMovieQuery('');

        history.push('/list');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => setMovieQuery(event.target.value)} placeholder="movie query here..." value={movieQuery} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MovieForm;