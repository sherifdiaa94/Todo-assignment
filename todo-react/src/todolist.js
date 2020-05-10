import React,{Component} from 'react'
import Todo from './todo'
import {OrderedList} from "carbon-components-react";

function TodoList(props){
    if(props.list.error!=="Failed to fetch data"){
    return (
    <OrderedList>
        {
            props.list.map((todo,index) => <Todo key={index} todo={todo}{...props} index={index}/>)
        }
    </OrderedList>)}
    else{
        return <h1>{props.list.error}</h1>
    }
    
}

export default TodoList