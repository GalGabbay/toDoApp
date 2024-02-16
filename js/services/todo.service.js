'use strict'

var gTodos
createTodos()

function getTodos() {
    return gTodos

}

function removeTodos(todoid){
    const todoIdx = gTodos.findIndex(todo => todo.id === todoid)
    gTodos.splice(todoIdx, 1)
}

function toggleTodo(todoid) {
    const todo = gTodos.find(todo => todo.id === todoid)
    todo.isDone = !todo.isDone

}

function addTodo(txt){
    const newTodo = createTodo(txt)
    gTodos.unshift(newTodo)
}


function readTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}



function createTodos() {
    gTodos = [

        createTodo('do this'),
        createTodo('do also that'),
        createTodo('try This'),

    ]
}


function createTodo(txt) {

    return {
        id: makeId(),
        txt,
        isDone: false,



    }


}

