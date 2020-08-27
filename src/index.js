import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state from './redux/state';

// let dialogs = [
//     {id: 1, name: 'Dima'},
//     {id: 2, name: 'Sveta'},
//     {id: 3, name: 'Andrey'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valera'}
// ];
// let messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your IT?'},
//     {id: 3, message: 'Fine!'}
// ];
//
// let posts = [
//     {id: 1, post: 'Lorem ipsum dolor sit amet.', likes: 12},
//     {id: 2, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!', likes: 7},
//     {id: 3, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime!', likes: 3}
// ];




ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
