import React from "react";

// 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Импортируем ACTION CREATOR-ы
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    // let textField = React.createRef();
    let addPost = () => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при добавлении поста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при изменении текста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText = {state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;
