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