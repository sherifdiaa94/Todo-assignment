import React,{Component} from 'react'
import Todo from './todo'
import {OrderedList} from "carbon-components-react";

function TodoList(props){
    //console.log(props)
    if(props.list.error==="Failed to fetch data"){
        return <h1>{props.list.error}</h1>
    }else if(props.list.error==="Failed to add item to the list"){
        return <h1>{props.list.error}</h1>
    }else if(props.list.error==="Failed to remove item to the list"){
        return <h1>{props.list.error}</h1>
    }else{
        return (
            <OrderedList>
                {
                    props.list.map((todo,index) => <Todo key={index} todo={todo}{...props} index={index}/>)
                }
            </OrderedList>)
    }
    
}

export default TodoList