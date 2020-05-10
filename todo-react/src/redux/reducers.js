//import todolist from '../data/List'

import {combineReducers} from 'redux'

let todotemp={
    id:5,
    item:"This is a temp todo in reducer"
}

function empty(state=[],action){
    return state
}
function list(state=[],action){ //initial state will be the inital todo list    set state=[] to make it initially empty untill get data from node
   
    if (action.type==="ADD_TODO"){
        console.log(state);
        return [...state,action.todo]; //todotemp will be changed to action.todo to take the new todo
    }else if(action.type==="REMOVE_TODO"){
        return state.filter(item=>item.id !== action.todoID);
    }else if(action.type==="CHANGE_TODO"){
        return state.map(todo=>todo.id !== action.todoID ? todo : {...todo,item: todotemp.item});  //todotemp.item will be action.todo.item
    }else if(action.type==="FetchData"){
        return ( action.datatest )
    }else if(action.type==="ERROR"){
        return { ...state, error: action.msg }
    }else{ 
        return state
    }
    
}

const rootReducer= combineReducers({list, empty})

export default rootReducer;