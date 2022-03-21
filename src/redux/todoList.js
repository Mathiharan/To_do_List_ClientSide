import * as ActionTypes from "./ActionTypes";

export const TodoList = (
  state = {
    errMess: null,
    tasks: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
        state.tasks.push(action.payload);
        return {...state, errMess: null};

    case ActionTypes.DEL_TODO:
        state.tasks = state.tasks.filter(
            (task) => task._id !== action.payload
        );
        return {...state, errMess: action.payload, tasks: []};
      
    default:
      return state;
  }
};
