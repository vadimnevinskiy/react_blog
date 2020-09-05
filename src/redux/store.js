import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        // STEP 4 - OBSERVER
        // Вызов this._callSubscriber(this._state);
        // Но фактически после шагов 2 и 3 мы вызываем функцию rerenderEntireTree(state)
        // в которую передаем обновленный state, по коду он выглядит как this._state
        this._callSubscriber(this._state);
    }
}





export default store;
