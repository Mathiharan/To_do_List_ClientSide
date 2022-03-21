import * as ActionTypes from "./ActionTypes";

export const TodoList = (
  state = {
    errMess: null,
    todoList: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
        state.todoList.push(action.payload);
        return {...state, errMess: null};

    case ActionTypes.DEL_TODO:
        state.todoList = state.todoList.filter(
            (task) => task._id !== action.payload
        );
        return {...state, errMess: action.payload, todoList: []};
      
    default:
      return state;
  }
};
