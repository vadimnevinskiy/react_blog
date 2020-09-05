import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";

import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

// STEP 2 - OBSERVER
// Во время первой инициализации проекта вызываем функцию subscribe из store,
// в которую передаем функцию коллбек rerenderEntireTree
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
