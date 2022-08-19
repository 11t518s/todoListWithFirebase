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
    // todoList.unshift({id: todoId, todoText: todoInput.value, checked: false})
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
    return {...item, checked : !item.checked}
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
          <button  onclick='deleteTodo(${todo.id})'>x</button>
        </li>`
    }).join('')}`
  }
      
// 이렇게 모든 클릭을 listner하고 id 가 맞으면 작동하게 할 수는 있는데 좋아보이지 않음.
// <button id="deleteButton">x</button>
// document.addEventListener('click', (event) => {
//   if(event.target && event.target.id== 'deleteButton'){
//     //do something
//     console.log(111)
//     console.log(event)
// }
// })
