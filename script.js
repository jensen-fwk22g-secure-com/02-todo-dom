/* Så här ser datan ut:
const data = [
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


// När appen startas
// Hämta eventuell data från local storage
let data = getFromLocalStorage()
if (data) {
	data.forEach(item => {
		let todoElement = createTodoElement(item)
		// console.log('todo element: ', todoElement)
		todoList.appendChild(todoElement)
	})
} else {
	data = []  // inga todo items
}



// EVENT LISTENERS
addTodoButton.addEventListener('click', () => {
	const valueFromUser = todoInput.value
	const newTodo = {
		id: nextTodoId,
		isDone: false,
		description: valueFromUser
	}
	nextTodoId++  // för att garantera unika id:n
	
	const element = createTodoElement(newTodo)
	todoList.appendChild(element)

	data.push(newTodo)
	saveToLocalStorage(data)
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
})


// FUNCTIONS
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

// Utmaning: gör så att "isDone" status också sparas i localStorage!