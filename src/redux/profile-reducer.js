const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


}

// 1) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Добавление сообщения на стену
// для быстрого создания объекта action
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
// 1) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Обновление сообщения в текстовом поле
// для быстрого создания объекта action, в параметре которого
// получаем текст сообщения text
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;
