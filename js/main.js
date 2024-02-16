'use strict'

var gTodos
createTodos()


function onInit() {
    renderTodos()

}

function renderTodos() {

    
    const strHTMLs = gTodos.map(todo => 
        
        

        `
    <li onclick="onToggleTodo('${todo.id}')">
        
    <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
    <button onclick="onRemoveTodo(event, '${todo.id}')">X</button>

    </li>

    
    ` )

    const elTodoList = document.querySelector('.todo-list')
    elTodoList.innerHTML = strHTMLs.join('')

}

function onRemoveTodo (ev, todoid){
    ev.stopPropagation()
    const todoIdx = gTodos.findIndex(todo => todo.id === todoid)
    console.log(todoIdx)
    gTodos.splice(todoIdx, 1)
    renderTodos()
}

function onToggleTodo(todoid) {
   const todo = gTodos.find(todo => todo.id === todoid)
   todo.isDone = !todo.isDone
   renderTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()

    const elInput = document.querySelector('.new-todo input')
    if (!elInput.value) return

    const newTodo = createTodo(elInput.value)
    gTodos.unshift(newTodo)
    elInput.value = ''
    renderTodos()
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


function makeId(length = 5) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
}
