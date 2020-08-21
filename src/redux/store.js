import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './usersReducer';
import chatReducer from './chatReducer';

const reducers = combineReducers({
    usersReducer,
    chatReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;
export default store;