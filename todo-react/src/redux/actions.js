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
    type: 'ADD_TODO_FAILURE',
    payload: {
      error
    }
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

export function removetodo(todoID){
    console.log(todoID)
    return{
        type: 'REMOVE_TODO',
        todoID
    }
}


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
                { type: "FetchData", datatest: json }))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }}


// export const fetchData = () => {

//         return (dispatch) => {
//             return fetch('http://localhost:81/todoApp/api/todos')
//                 .then(response => response.json())
//                 .then(res => {
//                     if(res.error) {
//                         throw(res.error);
//                     }
//                     dispatch({ type: "FetchData", datatest: res })                   
//                 })
//                 .catch(err => dispatch(
//                      { type: "ERROR",msg: "Unable to fetch data" }))
              
//         }}


