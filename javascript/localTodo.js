const todoInput = document.getElementById('todoInput')
const addTodoButton = document.getElementById('addTodoButton')
const todoElement = document.getElementById('todoList')
let todoList = [{checked: false, id: 0, todoText: '테스트용'}]
let todoId = 1


const paintTodoList = () => {
  todoElement.innerHTML = `${todoList.map(todo => {
      return `
          <li class="todoItem">
            <input class="checkButton" type='checkbox' ${todo.checked ?'checked' :null} id=${todo.id} />
            <p>${todo.todoText}</p>
            <button class="deleteButton" id=${todo.id}>x</button>
          </li>
          `
    }).join('')}`
  }

const deleteTodo = (id) => {
  todoList = todoList.filter(item => item.id !== Number(id))
  paintTodoList()
}

const checkTodo = (id) => {
  todoList = todoList.map(item => { 
    if (item.id === Number(id)) {
      return {...item, checked : !item.checked}
    } else {
      return item
    }})
  paintTodoList()
}
  
addTodoButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (todoInput.value === ''){
   return
  }
  // todoList.unshift({id: todoId, todoText: todoInput.value, checked: false})
  todoList.push({id: todoId, todoText: todoInput.value, checked: false})
  todoId = todoId + 1
  paintTodoList()
  todoInput.value = ''
})


document.addEventListener('click', (event) => {

  if(event.target.className === 'checkButton') {
    checkTodo(event.target.id)
  }

  if(event.target.className === 'deleteButton') {
    deleteTodo(event.target.id)
  }

})

paintTodoList()