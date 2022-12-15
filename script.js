/*const data = [
	{
		id: 1,
		isDone: true,
		description: 'Köpa presenter'
	}
]*/
// VARIABLES
const addTodoButton = document.querySelector('#add-todo-button')
const todoInput = document.querySelector('.form-container input')
const todoList = document.querySelector('.todo-list')
// Kontrollera att koden gör det den ska - ofta!
// console.log('Finns button?', addTodoButton)

const key = 'christmas-todo'
let nextTodoId = 4


// EVENT LISTENERS
addTodoButton.addEventListener('click', () => {
	const valueFromUser = todoInput.value
	const newTodo = {
		id: nextTodoId,
		isDone: false,
		description: valueFromUser
	}
	nextTodoId++
	// console.log('New todo: ', newTodo)
	const element = createTodoElement(newTodo)
	todoList.appendChild(element)
})
function createTodoElement(newTodo) {
	const element = document.createElement('li')
	const label = document.createElement('label')
	const checkbox = document.createElement('input')
	const span = document.createElement('span')
	checkbox.type = 'checkbox'
	span.innerText = newTodo.description

	label.appendChild(checkbox)
	label.appendChild(span)
	element.appendChild(label)
	return element
}

todoInput.addEventListener('keyup', event => {
	let userText = todoInput.value
	if( userText.length > 0 ) {
		addTodoButton.disabled = false
	} else {
		addTodoButton.disabled = true
	}
	// console.log('Key press:', event.key, userText, event.target.value)
})

let maybeData = getFromLocalStorage()
if( maybeData ) {
	maybeData.forEach(item => {
		let todoElement = createTodoElement(item)
		// console.log('todo element: ', todoElement)
		todoList.appendChild(todoElement)
	})
}


// returnerar undefined eller data
function getFromLocalStorage() {
	let maybeJson = localStorage.getItem(key)
	if( !maybeJson ) {
		return
	}
	try {
		let actualData = JSON.parse(maybeJson)
		return actualData
	} catch {
		return
	}
}
function saveToLocalStorage(items) {
	// items är en lista med objekt
	// måste omvandlas till en sträng med JSON
	let json = JSON.stringify(items)
	localStorage.setItem(key, json)
}

saveToLocalStorage([
	{ id: 10, isDone: true, description: 'Be awesome' },
	{ id: 11, isDone: false, description: 'Julbaket' }
])