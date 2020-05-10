import React,{Component} from 'react'
import {ListItem} from "carbon-components-react";

function todo(props){
    const todo=props.todo
    //console.log("Inside todo")
    //console.log(props);
    return <ListItem onClick={()=>{
        props.removetodo(todo.id)
    }}>
            {todo.item}
        </ListItem>
    
}

export default todo