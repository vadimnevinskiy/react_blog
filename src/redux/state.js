const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'Lorem ipsum dolor sit amet.',
                    likes: 12},
                {
                    id: 2,
                    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!',
                    likes: 7
                },
                {
                    id: 3,
                    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime!',
                    likes: 3
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT?'},
                {id: 3, message: 'Fine!'}
            ],
            newMessageText: ''
        }
    },
    // STEP 1 - OBSERVER
    // создана заглушка для исключения ошибок в вызове нижних функциях,
    // простая инициализация функции заглушки, которая ничего не делает
    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
      return this._state;
    },
    // STEP 3 - OBSERVER
    // сразу после инициализации проекта вызывается функция subscribe,
    // которая получает в качестве параметра коллбек функцию rerenderEntireTree
    // и переприсваивается функция _callSubscriber функцией rerenderEntireTree
    // получили что this._callSubscriber = rerenderEntireTree, т.е. при вызове функции
    // this._callSubscriber мы фактически вызываем rerenderEntireTree(state) из index.js
    // с параметром state, куда передаем объект _state из текущего объекта, например
    // this._callSubscriber(this._state);
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                post: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            // STEP 4 - OBSERVER
            // Вызов this._callSubscriber(this._state);
            // Но фактически после шагов 2 и 3 мы вызываем функцию rerenderEntireTree(state)
            // в которую передаем обновленный state, по коду он выглядит как this._state
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;
