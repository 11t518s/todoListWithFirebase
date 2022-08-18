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
  console.log(id)
  console.log(todoList)
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
    if (todo.checked){
      return `<li class="todoItem">
        <input type='checkbox' checked onclick='checkTodo(${todo.id})'/>
        <p>${todo.todoText}</p>
        <button onclick='deleteTodo(${todo.id})'>x</button>
      </li>`
    } else {
      return `<li class="todoItem">
        <input type='checkbox' onclick='checkTodo(${todo.id})'/>
        <p>${todo.todoText}</p>
        <button onclick='deleteTodo(${todo.id})'>x</button>
      </li>`
    }
  }).join('')}`
}

// const createTodoList = () => {


//   const todoItem = document.createElement('li')
//   const deleteButton = document.createElement('button')
  
//   todoList.forEach((todo) => {
    
//     todoItem.classList.add('todoItem')
//     todoItem.innerText = todo.todoText
//     deleteButton.innerText = 'x'
//     deleteButton.addEventListener('click', (event) => {
//       event.preventDefault()
//       console.log(event.target)
//       const li = event.target.parentNode
//       todoElement.removeChild(li)
//     })
    
//     todoItem.appendChild(deleteButton)
//     todoElement.appendChild(todoItem)
//   })

// }