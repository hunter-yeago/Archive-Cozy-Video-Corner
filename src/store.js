// import { configureStore } from "@reduxjs/toolkit";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import videoReducer from './videoReducer';

export const store = createStore(
    videoReducer,
    composeWithDevTools(applyMiddleware(thunk))
);