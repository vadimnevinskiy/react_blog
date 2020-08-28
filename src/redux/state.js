let rerenderEntireTree = () => {
    console.log('State changed');
}
let state = {
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
};


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        post: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};
export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};



export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;
