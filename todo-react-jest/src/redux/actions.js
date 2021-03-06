// import {types} from './types'
// import axios from 'axios'

import axios from 'axios';


export const addtodo = ({ id, item,completed }) => {
    const ApiKey="aeb32724-4c00-4cb7-ba86-0bfcce06c148"
    const token="123456789"
    return dispatch => {
      //dispatch(addTodoStarted());
  
      axios
        .post(`http://localhost:81/todoApp/api/todos`, {
          id,
          item,
          completed
        },
        {
            headers: {
              "x-Gateway-ApiKey": ApiKey,
              "csrf-token": token
            }
          })
        .then(res => {
          dispatch(addTodoSuccess({ id, item,completed }));
        })
        .catch(err => {
          dispatch(addTodoFailure(err.message));
        });
    };
  };
  const addTodoFailure = error => ({
    type: 'ERROR_ADD',
    msg: "Failed to add item to the list"
  });

  export function addTodoSuccess(todo){
    return{
        type: 'ADD_TODO',
        todo
    }
}

// export function addTodo(todo){
//     return{
//         type: 'ADD_TODO',
//         todo
//     }
// }


export const removetodo = (id) => {
    const ApiKey="aeb32724-4c00-4cb7-ba86-0bfcce06c148"
    const token="123456789"
    return dispatch => {
      //dispatch(addTodoStarted());
  
      axios
        .delete(`http://localhost:81/todoApp/api/todos/${id}`,
        {
            headers: {
              "x-Gateway-ApiKey": ApiKey,
              "csrf-token": token
            }
          })
        .then(res => {
          dispatch(removeTodoSuccess(id));
        })
        .catch(err => {
          dispatch(removeTodoFailure(err.message));
        });
    };
  };

  export function removeTodoSuccess(todoID){
    //console.log(todoID)
    return{
        type: 'REMOVE_TODO',
        todoID
    }
}
const removeTodoFailure = error => ({
    type: 'ERROR_REMOVE',
    msg: "Failed to remove item from the list"
  });


// export function removetodo(todoID){
//     console.log(todoID)
//     return{
//         type: 'REMOVE_TODO',
//         todoID
//     }
// }


export function changetodo(id,completed){
    const ApiKey="aeb32724-4c00-4cb7-ba86-0bfcce06c148"
    const token="123456789"
    return dispatch => {
        //dispatch(addTodoStarted());
        // const completed=todo.completed
        // const id =todo.id
        axios
          .patch(`http://localhost:81/todoApp/api/todos/${id}`, {
            'completed': completed
          },
          {
              headers: {
                "x-Gateway-ApiKey": ApiKey,
                "csrf-token": token
              }
            })
          .then(res => {
            dispatch(changeTodoSuccess(res.data));
          })
          .catch(err => {
            dispatch(changeTodoFailure(err.message));
          });
      };
}

export function changeTodoSuccess(todo){
    console.log(todo)
    return{
        type: 'CHANGE_TODO',
        todo
    }
}

const changeTodoFailure = error => ({
    type: 'ERROR_CHANGE',
    msg: "Failed to change item in the list"
  });

export const fetchData = () => {
    const ApiKey="aeb32724-4c00-4cb7-ba86-0bfcce06c148"
    const token="123456789"
    return (dispatch) => {
        return fetch('http://localhost:81/todoApp/api/todos',
        {
            headers: {
              "x-Gateway-ApiKey": ApiKey,
              "csrf-token": token
            }
          })
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FETCH_DATA", todolist: json }))
            .catch(err => dispatch(
                { type: "ERROR_FETCH",msg: "Failed to fetch data" }))
    }}


export const checkHealth = () => {
    return (dispatch) => {
            return fetch('http://localhost:81/todoApp/api/health')
                .then(response => response.json())
                .then(json => dispatch(
                    { type: "CHECK_HEALTH", status: json }))
                .catch(err => dispatch(
                    { type: "ERROR_FETCH",msg: "Failed to fetch data" }))
        }
    }



        