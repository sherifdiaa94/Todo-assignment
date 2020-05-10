import axios from 'axios';

export const addtodo = ({ id, item }) => {
    return dispatch => {
      //dispatch(addTodoStarted());
  
      axios
        .post(`http://localhost:81/todoApp/api/todos`, {
          id,
          item
        })
        .then(res => {
          dispatch(addTodoSuccess({ id, item }));
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
    return dispatch => {
      //dispatch(addTodoStarted());
  
      axios
        .delete(`http://localhost:81/todoApp/api/todos/${id}`)
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
    msg: "Failed to remove item to the list"
  });


// export function removetodo(todoID){
//     console.log(todoID)
//     return{
//         type: 'REMOVE_TODO',
//         todoID
//     }
// }


export function changetodo(todoID){
    return{
        type: 'CHANGE_TODO',
        todoID
    }
}

export const fetchData = () => {

    return (dispatch) => {
        return fetch('http://localhost:81/todoApp/api/todos')
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



        