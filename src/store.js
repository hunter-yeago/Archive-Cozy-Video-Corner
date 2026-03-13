import { configureStore } from "@reduxjs/toolkit";

import videoReducer from './videoReducer';

export const store = configureStore({
    reducer: videoReducer,
});