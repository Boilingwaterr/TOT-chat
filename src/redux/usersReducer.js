import { usersAPI } from "../api/api";

const SET_USERS = "usersReducer/SET_USERS";

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:

            return {
                ...state, users: [...action.users]
            };

        default:
            return state;
    }
}

const setUsers = users => {
    return { type: SET_USERS, users };
}

//thunk
export const getUsersThunk = () => {
    return async dispatch => {
        let data = await usersAPI.getUsers();
        dispatch(setUsers(data.results));
    }
}
export default userReducer;