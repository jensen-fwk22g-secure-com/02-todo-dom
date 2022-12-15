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
	const label = document.createElement('label')
	const checkbox = document.createElement('input')
	const span = document.createElement('span')
	checkbox.type = 'checkbox'
	span.innerText = newTodo.description

	label.appendChild(checkbox)
	label.appendChild(span)
	element.appendChild(label)
	todoList.appendChild(element)
})

todoInput.addEventListener('keyup', event => {
	let userText = todoInput.value
	if( userText.length > 0 ) {
		addTodoButton.disabled = false
	} else {
		addTodoButton.disabled = true
	}
	// console.log('Key press:', event.key, userText, event.target.value)
})
// keyDown, keyUp, keyPress ??
