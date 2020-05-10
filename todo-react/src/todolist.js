import React,{Component} from 'react'
import Todo from './todo'
function TodoList(props){
    return <ul>
        {
            //props.list.map(item => <Todo key={item.id} {...item}/>)
            props.list.map((todo,index) => <Todo key={index} todo={todo}{...props} index={index}/>)
        }
    </ul>
}

export default TodoList