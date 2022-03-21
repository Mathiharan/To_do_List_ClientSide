import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TodoList } from './todoList'; 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            todoList: TodoList,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}