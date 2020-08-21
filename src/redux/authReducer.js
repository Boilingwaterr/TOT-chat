import { authAPI } from "../api/api";

const AUTH = 'authReducer/AUTH';
const GET_AUTH = 'authReducer/GET_AUTH';

const initialState = {
    isAuth: false,
    myNick: null,
    myColor: '#grey',
    colors: [
        '#4CBB17',
        '#9EE788',
        '#2D572C',
        '#A12312',
        '#E4766C',
        '#73443F',
        '#122FAA',
        '#B2A5F3',
        '#337AB7',
        '#424242',
        '#F594B9'
    ]

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                myNick: action.data.name,
                myColor: action.data.clr,
                isAuth: true
            };
        case GET_AUTH:
            return {
                ...state, isAuth: action.boolean
            }
        default:
            return state;
    }
}

export const setAuth = data => {
    return {
        type: AUTH, data
    }
}

export const getAuth = boolean => {
    return {
        type: GET_AUTH, boolean
    }
}

export const setAuthorization = (data) => {
    return async (dispatch) => {
        let res = await authAPI.authorization(data)
        console.log(res)
        dispatch(setAuth(res))
    }
}

export const getAuthorization = () => {
    return async (dispatch) => {
        let res = await authAPI.getAuthorization();

        if (res) {
            dispatch(setAuth(JSON.parse(res.res)))
        } else {
            dispatch(getAuth(res));
        }
    }
}

export default authReducer;