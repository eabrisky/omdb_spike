import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMovies(action) {

    try {

        const response = yield axios.get( `/api/omdb/?query=${action.payload.query}` );
        yield put({ type: 'SET_MOVIES', payload: response.data });

    }

    catch (error) {
        console.error(`Error getting movies: ${error}`);
    }
} // end getMovies fn*

function* fetchMovies() {
    try {
        const response = yield axios.get('/api/omdb');
        yield put({type: 'FETCH', payload: response.data})
    }
    catch (error) {
        console.error(`Error fetching movies: ${error}`);
    }
} // end fetchMovies fn*

function* movieSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('FETCH_MOVIES', fetchMovies);
}

export default movieSaga;