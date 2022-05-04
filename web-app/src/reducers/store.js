import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import authReducer from './auth';
import filterReducer from './filter';
import galleriaReducer from './galleria';


export default configureStore({
    reducer: {
        auth: authReducer,
        filter: filterReducer,
        galleria: galleriaReducer,
    },
    middleware: [thunk, 
        logger],
})