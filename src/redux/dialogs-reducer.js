const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

// 1) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Добавление сообщения на стену
// для быстрого создания объекта action
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

// 1) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Обновление сообщения в текстовом поле
// для быстрого создания объекта action, в параметре которого
// получаем текст сообщения text
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogReducer;
