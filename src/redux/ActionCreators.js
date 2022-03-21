import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";

export const addTask = (task) => ({
    type: ActionTypes.ADD_TODO,
    payload: task,
});

export const postTask = (task) => (dispatch) => {
    const newTask = {
        task: task,
    };

    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
            "content-Type": "application/json",
        },
        credentials: "same-origin",
    })
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addTask(response)))
      .catch((error) => {
        console.log("Post Task", error.message);
        alert("Your Task could not be posted\nError: " + error.message);
      });
};