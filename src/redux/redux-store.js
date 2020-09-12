import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
});


let store = createStore(reducers);

export default store;
