import React,{Component} from 'react'
import Todo from './todo'
function TodoList(props){
    let list=props.list
    //console.log("Inside TodoList")
    //console.log(props);

    return <ul>
        {
            //props.list.map(item => <Todo key={item.id} {...item}/>)
            props.list.map((todo,index) => <Todo key={index} todo={todo}{...props} index={index}/>)
        }
    </ul>
}

export default TodoList