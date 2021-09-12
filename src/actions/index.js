// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = (todo) =>{
    return {
        type: "AddTodo",
        payload: {
        ...todo,
        status: "Pending",
        id: todoId ++,
        }
    }
}

export const removeTodo = (id) => {
    return{
        type: 'RemoveTodo',
        payload: id
    }
}

export const toInProgress = (id) => {
    return{
        type: 'ToInProgress',
        payload: id
    }
}

export const toDone = (id) => {
    return{
        type: 'ToDone',
        payload: id
    }
}

