const SEND_WORK = 'chatReducer/SEND_WORK';
const SEND_FLOOD = 'chatReducer/SEND_FLOOD';
const TARGET = 'chatReducer/TARGET';

const initialState = {
    workChat: [
        { nickname: "Artem", message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est. Aliquet nec ullamcorper sit amet risus. Vel eros donec ac odio', color: '#A12312' },
        { nickname: "Nick", message: 'empor orci dapibus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Massa id neque aliquam vestibulum morbi blandit cursus. In est ante in nibh', color: '#4CBB17' },
        { nickname: "Baron1212", message: 'molestie. Dictumst quisque sagittis purus sit amet volutpat.', color: '#9EE788' },
        { nickname: "AWF", message: 'met consectetu', color: '#F594B9' }
    ],
    floodChat: [
        { nickname: "FISH", message: ' risus. Vel eros donec ac odio tempor orci dapibus. Nec tincidunt praes', color: '#A12312' },
        { nickname: "_vagner", message: 'piscing elit', color: '#337AB7' },
        { nickname: "Dima", message: 'cursus mattis', color: '#B2A5F3' },
        { nickname: "Artem", message: 'ahaha', color: '#A12312' },
        { nickname: "Artem", message: 'sed do', color: '#A12312' },
        { nickname: "AWF", message: 'lol :D', color: '#F594B9' },
        { nickname: "AWF", message: 'molestie. Dictumst :)', color: '#F594B9' },
        { nickname: "AWF", message: 'qwerty123', color: '#F594B9' }
    ],
    target: null
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_WORK:
            if (action.msg !== '') {
                const newMessage = {
                    nickname: action.myNick, message: action.msg, color: action.myColor
                }
                return {
                    ...state, workChat: [...state.workChat, newMessage]
                }
            }
            return state;

        case SEND_FLOOD:
            if (action.msg !== '') {
                const newMessage = {
                    nickname: action.myNick, message: action.msg, color: action.myColor
                }
                return {
                    ...state, floodChat: [...state.floodChat, newMessage]
                }
            }
            return state;

        case TARGET:
            return {
                ...state, target: `@${action.target}`
            }

        default:
            return state;
    }
}

export const setTarget = (target) => {
    return {
        type: TARGET, target
    }
}

export const sendWorkMessage = (msg, myNick, myColor) => {
    return {
        type: SEND_WORK, msg, myNick, myColor
    }
}


export const sendFloodMessage = (msg, myNick, myColor) => {
    return {
        type: SEND_FLOOD, msg, myNick, myColor
    }
}

export default chatReducer;