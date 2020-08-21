const SET_USERS = "usersReducer/SET_USERS";

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:

            return;

        default:
            return state;
    }
}

export const setUsersActionCreator = users => {
    return { type: SET_USERS, users };
}

export default userReducer;