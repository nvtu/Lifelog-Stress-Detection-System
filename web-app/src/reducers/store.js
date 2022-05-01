import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import authReducer from './auth';


export default configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [thunk, 
        logger],
})