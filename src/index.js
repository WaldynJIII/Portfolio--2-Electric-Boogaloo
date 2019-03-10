import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('YEET_PROJECT', postProject);
    yield takeEvery('GET_PROJECT', getProject);
    yield takeEvery('REMOVE', removeProject);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
function* postProject(action) {

    try {
        yield axios.post('/api/portfolio', action.payload);
        const nextAction = { type: 'GET_PLANT' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem');
    }
}
// Used to store projects returned from the server
const projects = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
            
        default:
            return state;
    }
}
function* removeProject(action) {
    console.log(action.payload)
    try {
        yield axios.delete(`api/portfolio/${action.payload}`)

        yield put({ type: 'GET_PROJECT' })
    } catch (error) {
        console.log('DELETE ', error)
    }
}
// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}
function* getProject(action) {
    try {
        const projectData = yield axios({
            type: 'GET',
            url: '/api/portfolio'
        })
        yield put({ type: 'SET_PROJECTS', payload: projectData.data })
    }
    catch (err) {
        console.log('in plantplant (get)', err)
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
