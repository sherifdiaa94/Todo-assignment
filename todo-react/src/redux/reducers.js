import todolist from '../data/List'

import {combineReducers} from 'redux'

let todotemp={
    id:5,
    item:"This is a temp todo in reducer"
}

function empty(state=[],action){
    return state
}

function list(state=todolist,action){ //initial state will be the inital todo list
   
    if (action.type==="ADD_TODO"){
        console.log(state);
        return [...state,todotemp]; //todotemp will be changed to action.todo to take the new todo
    }else if(action.type==="REMOVE_TODO"){
        console.log(state);
        return state.filter(item=>item.id !== action.todoID);
    }else if(action.type==="CHANGE_TODO"){
        return state.map(todo=>todo.id !== action.todoID ? todo : {...todo,item: todotemp.item});  //todotemp.item will be action.todo.item
    }else{ 
        //console.log(state);
        return state
    }
    
    return state
}

const rootReducer= combineReducers({list, empty})

export default rootReducer;