const SEND_WORK = 'chatReducer/SEND_WORK';
const SEND_FLOOD = 'chatReducer/SEND_FLOOD';

const initialState = {
    workChat: [
        { nickname: "nick", message: 'work! noW~!' }
    ],
    floodChat: [
        { nickname: "nick", message: 'lmao jst joke' }
    ],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_WORK:
            if (action.msg !== '') {
                const newMessage = {
                    nickname: state.myNick, message: action.msg,
                    // time: {
                    //     fullDate: `${day}.${month}.${year}`,
                    //     exactTime: `${hours}:${minutes}:${seconds}`,
                    // },
                    // id: now.getTime()
                }
                return {
                    ...state, workChat: [...state.workChat, newMessage]
                }
            }
            return state;

        case SEND_FLOOD:
            if (action.msg !== '') {
                const newMessage = {
                    nickname: state.myNick, message: action.msg
                }
                return {
                    ...state, floodChat: [...state.floodChat, newMessage]
                }
            }
            return state;

        default:
            return state;
    }
}

export const sendWorkMessage = msg => {
    return {
        type: SEND_WORK, msg
    }
}

export const sendFloodMessage = msg => {
    return {
        type: SEND_FLOOD, msg
    }
}

export default chatReducer;