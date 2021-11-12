import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import tvReducer from './tv'
import movieReducer from './movie'

export const store = configureStore({
    reducer: {
        tv : tvReducer,
        movie : movieReducer,
    },
    middleware: [thunk],
})
