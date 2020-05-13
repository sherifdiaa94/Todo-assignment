import React from 'react'
import {ListItem} from "carbon-components-react";

function todo(props){
    const todo=props.todo
    //console.log("Inside todo")
    console.log(props.todo);

    return (
    <div>
    <ListItem style={checkboxStyle(todo.completed)} >
        <input type="checkbox" onChange={() => toggleCompleted(props)}/>
            {todo.item}
            <button className="buttonComponent"onClick={()=>{
        props.removetodo(todo.id)
    }}>Remove</button>
        </ListItem>
       
        </div>
        )
    
}

function toggleCompleted(props){
    //console.log(props.todo)

    if (props.todo.completed==="false"){
        props.changetodo(props.todo.id,"true")
    }else{
        props.changetodo(props.todo.id,"false")
    }
}

function checkboxStyle(checked) {    
    if (checked==="true"){
        return{
            textDecoration:'line-through'
        }
    }else{
        return{
            textDecoration:'none'
        }
    }
  }

export default todo