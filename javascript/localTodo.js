const todoInput = document.getElementById('todoInput')
const addTodoButton = document.getElementById('addTodoButton')
const todoElement = document.getElementById('todoList')
let todoList = []
let todoId = 0


addTodoButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (todoInput.value === ''){
     return
    }
    todoList.push({id: todoId, todoText: todoInput.value, checked: false})
    todoId = todoId + 1
    paintTodoList()
    todoInput.value = ''
})

const deleteTodo = (id) => {
  todoList = todoList.filter(item => item.id !== id)
  paintTodoList()
}

const checkTodo = (id) => {
  todoList = todoList.map(item => { if (item.id === id) {
    return {...item, checked : true}
  } else {
    return item
  }})
  paintTodoList()
}
const paintTodoList = () => {

  todoElement.innerHTML = `${todoList.map(todo => {
      return `<li class="todoItem">
          <input type='checkbox' ${todo.checked ?'checked' :null} onclick='checkTodo(${todo.id})'/>
          <p>${todo.todoText}</p>
          <button id="deleteButton">x</button>
      </li>`
  }).join('')}`
}
// <!--        <button  onclick='deleteTodo(${todo.id})'>x</button>-->

document.getElementById('deleteButton').addEventListener('click', (event) => {
  if(event){
    console.log(event)
    console.log(1)
  }
})
