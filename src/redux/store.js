import { createStore, combineReducers } from 'redux';
import usersReducer from './usersReducer';
import chatReducer from './chatReducer';

combineReducers({
    usersReducer,
    chatReducer
})

const store = createStore({});

export default store;