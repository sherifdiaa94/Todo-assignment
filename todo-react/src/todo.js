import React,{Component} from 'react'

function todo(props){
    const todo=props.todo
    //console.log("Inside todo")
    //console.log(props);
    return <li onClick={()=>{
        props.removetodo(todo.id)
    }}>
            {todo.item}
        </li>
    
}

export default todo