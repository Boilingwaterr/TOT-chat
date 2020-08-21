const initialState = {
    items: []
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'type':

            return;

        default:
            return state;
    }
}

export default chatReducer;