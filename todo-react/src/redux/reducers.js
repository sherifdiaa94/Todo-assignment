//import todolist from '../data/List'

import {combineReducers} from 'redux'

let todotemp={
    id:5,
    item:"This is a temp todo in reducer",
    completed:"false"
}

function empty(state=[],action){
    return state
}
function list(state=[],action){ //initial state will be the inital todo list    set state=[] to make it initially empty untill get data from node
   
    if (action.type==="ADD_TODO"){
        return [...state,action.todo]; //todotemp will be changed to action.todo to take the new todo
    }else if(action.type==="REMOVE_TODO"){
        return state.filter(item=>item.id !== action.todoID);
    }else if(action.type==="CHANGE_TODO"){
        return action.todo
        //return state.map(todo=>todo.id !== action.todoID ? todo : {...todo,completed: action.todo.item});  //todotemp.item will be action.todo.item
    }else if(action.type==="FETCH_DATA"){
        return ( action.todolist )
    }else if(action.type==="ERROR_FETCH"){
        return {...state,error:action.msg}
    }else if(action.type==="ERROR_ADD"){
        return {...state,error:action.msg}
    }else if(action.type==="ERROR_REMOVE"){
        return {...state,error:action.msg}
    }else if(action.type==="ERROR_CHANGE"){
        return {...state,error:action.msg}
    }else if(action.type==="CHECK_HEALTH"){
        return { ...state,status:action.status }
    }else{ 
        return state
    }
    
}

const rootReducer= combineReducers({list, empty})

export default rootReducer;