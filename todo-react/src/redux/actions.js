export function addtodo(todo){
    return{
        type: 'ADD_TODO',
        todo
    }
}

export function removetodo(todoID){
    return{
        type: 'REMOVE_TODO',
        todoID
    }
}


export function changetodo(todoID){
    return{
        type: 'CHANGE_TODO',
        todoID
    }
}