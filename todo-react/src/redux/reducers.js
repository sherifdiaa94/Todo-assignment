import todolist from '../data/List'

let todotemp={
    id:5,
    item:"This is a temp todo in reducer"
}
function list(state=todolist,action){ //initial state will be the inital todo list
    
    if (action.type==="ADD_TODO"){
        console.log(state);
        return [...state,todotemp]; //todotemp will be changed to action.todo to take the new todo
    }else if(action.type==="REMOVE_TODO"){
        console.log(state);
        return state.filter(state=>state.id !== action.todoID);
    }else
        return state;
}