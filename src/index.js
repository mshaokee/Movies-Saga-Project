import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    //intercept data then send to reducer
    yield takeEvery('GET_MOVIES', fetchMovies)
    // yield takeEvery('EDIT_MOVIES', editMovies)
}

//generators
function* fetchMovies(action){
    console.log('-----------> in fetchMovies');
    try {
        //retrieve data from /movies route
        const response = yield axios.get('/movies')
        console.log('in fetchMovies');
        //send data to our movies reducer
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    };//end try
};//end fetchMovies

// function* editMovies(action){
//     console.log('----------in editMovies');
//     try {
//         //retrieve data from /movies route
//     } catch (err) {
//         console.log('Error editMovies generator', err);
//     }
// };//end editMovies

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
};//end movies

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
};//end genres


// Used to put selected movie in display
const selectMovie = (state = [], action) => {
    console.log('in currentMovie reducer', action.payload);
    if (action.type === 'current_movie'){
        return state;
    }
    return state;
};//end currentMovie

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
    document.getElementById('root'));
    
registerServiceWorker();
