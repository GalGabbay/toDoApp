'use strict'

function onInit() {
    renderTodos()

}


function renderTodos() {
    const todos = getTodos()

    const strHTMLs = todos.map(todo => 

        ` <li onclick="onToggleTodo('${todo.id}')">
        
    <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
    <button onclick="onRemoveTodo(event, '${todo.id}')">X</button>

    </li>

    ` )

    const elTodoList = document.querySelector('.todo-list')
    elTodoList.innerHTML = strHTMLs.join('')

}

function onRemoveTodo(ev, todoid) {
    ev.stopPropagation()
    removeTodos(todoid)
    renderTodos()
}

function onToggleTodo(todoid) {
    toggleTodo(todoid)
    renderTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()

    const elInput = document.querySelector('.new-todo input')
    if (!elInput.value) return

    addTodo(elInput.value)

    elInput.value = ''
    renderTodos()
}


