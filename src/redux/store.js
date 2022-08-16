import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './reducers/reducer'
import * as services from './services/services';

const store = configureStore({
    reducer: {reducer},
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            thunk: {
                extraArgument : services
            }
        })
})

export default store