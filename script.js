/*const data = [
	{
		id: 1,
		isDone: true,
		description: 'Köpa presenter'
	}
]*/

const addTodoButton = document.querySelector('#add-todo-button')
const todoInput = document.querySelector('.form-container input')
const todoList = document.querySelector('.todo-list')
// Kontrollera att koden gör det den ska - ofta!
// console.log('Finns button?', addTodoButton)

let nextTodoId = 4

addTodoButton.addEventListener('click', () => {
	const valueFromUser = todoInput.value
	const newTodo = {
		id: nextTodoId,
		isDone: false,
		description: valueFromUser
	}
	nextTodoId++
	// console.log('New todo: ', newTodo)

	const element = document.createElement('li')
	const checkbox = document.createElement('input')
	const span = document.createElement('span')
	checkbox.type = 'checkbox'
	span.innerText = newTodo.description

	element.appendChild(checkbox)
	element.appendChild(span)
	todoList.appendChild(element)
})