'use strict'

function onInit() {
    renderTodos()

}


function renderTodos() {
    const todos = getTodos()

    const strHTMLs = todos.map(todo => 

        ` <li onclick="onToggleTodo('${todo.id}')">
        
    <span class="${todo.isDone ? 'done' : ''}">${todo.txt}</span>
    <button onclick="onReadTodo(event, '${todo.id}')">Details</button>
    <button onclick="onRemoveTodo(event, '${todo.id}')">X</button>

    </li>

    ` )

    const elTodoList = document.querySelector('.todo-list')
    elTodoList.innerHTML = strHTMLs.join('')

    renderStats()

}

function renderStats(){

    const elTotal = document.querySelector('.total-todos')
    const elActive = document.querySelector('.active-todos')

    elTotal.innerText = getTotalTodos()
    elActive.innerText = getActiveTodos()
}

function onRemoveTodo(ev, todoid) {
    ev.stopPropagation()
    removeTodos(todoid)
    renderTodos()
}
function onReadTodo(ev, todoid) {
    ev.stopPropagation()
    const todo = readTodo(todoid)
    const elTodoDetails = document.querySelector('.todo-details') 
    const elSpan = elTodoDetails.querySelector('h2 span')
    const elpre = elTodoDetails.querySelector('pre')
    elpre.innerText = JSON.stringify(todo, null, 4)
    elSpan.innerText=todo.txt
    elTodoDetails.showModal()

    // setTimeout(() => {

    // elTodoDetails.close()
    // }, 2000)
}

function onSetFilterBy(elSelect) { 
    const filterBy = elSelect.value
    setFilterBy(filterBy)
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


