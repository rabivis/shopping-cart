import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import {loadState,saveState} from './localstorage.js';
// Load initial state from local storage.
const initialState = loadState();

const logger = createLogger();
//Create store.
const store = createStore(
    allReducers,
    initialState,
    applyMiddleware(thunk, promise, logger)
);
// Subscribe store for update state changes to local storage. 
store.subscribe(() => {
    saveState({activeCartItems: store.getState().activeCartItems,
        defaultProduct: store.getState().defaultProduct
        });
});
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
