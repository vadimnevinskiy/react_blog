import React from 'react';

import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";


rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//28.08.2020
// TODO Completed https://www.youtube.com/watch?v=VkHcOHWSaNQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=32
