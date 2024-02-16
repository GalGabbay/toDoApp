'use strict'

var gTodos
var gFilterby = 'all'
createTodos()

function getTodos() {
    // const isDone = gFilterby ==='done'
    if(gFilterby==='all') return gTodos

    return gTodos.filter(todo => {
        if(gFilterby === 'done') return todo.isDone
        else if (gFilterby === 'active' ) return !todo.isDone
    })

}

function removeTodos(todoid) {
    const todoIdx = gTodos.findIndex(todo => todo.id === todoid)
    gTodos.splice(todoIdx, 1)
}

function toggleTodo(todoid) {
    const todo = gTodos.find(todo => todo.id === todoid)
    todo.isDone = !todo.isDone

}

function addTodo(txt) {
    const newTodo = createTodo(txt)
    gTodos.unshift(newTodo)
}


function readTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function setFilterBy(filterBy) {

    gFilterby = filterBy
}

function getTotalTodos (){

    return gTodos.length
}

function getActiveTodos(){

    return gTodos.filter(todo=> !todo.isDone).length
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

