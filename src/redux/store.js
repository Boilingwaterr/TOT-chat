import { createStore, combineReducers } from 'redux';
import usersReducer from './usersReducer';
import chatReducer from './chatReducer';

const reducers = combineReducers({
    usersReducer,
    chatReducer
})

const store = createStore(reducers);

export default store;