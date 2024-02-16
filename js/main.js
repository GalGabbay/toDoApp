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
    <button>X</button>

    </li>

    
    ` )

    const elTodoList = document.querySelector('.todo-list')
    elTodoList.innerHTML = strHTMLs.join('')

}

function onToggleTodo(todoid) {
    console.log(todoid)
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
