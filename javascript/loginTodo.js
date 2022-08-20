import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getFirestore , collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCH_qQKgvX04MCiInM0t-1el2gXoNc9YpI",
  authDomain: "easylogin-69172.firebaseapp.com",
  projectId: "easylogin-69172",
  storageBucket: "easylogin-69172.appspot.com",
  messagingSenderId: "507786873248",
  appId: "1:507786873248:web:a4effc2440a8e81bfbfcc5",
  measurementId: "G-X3G15GWG5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const todoText = document.getElementById('todoInput')

document.getElementById('addTodoButton').addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    await addDoc(collection(db, "todo"), {
      todoText: todoText.value,
      checked: false,
      createdAt: new Date()
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  paintTodoList()
  todoText.value = ''
})

const paintTodoList = async () => {
  const todoList = await getDocs(collection(db, "todo"))
  const todoElement = document.getElementById('todoList')
  
  todoElement.innerHTML = `${todoList.docs.map(todo => {
    const todoData = todo.data()
    return `<li class="todoItem">
      <input type='checkbox' ${todoData.checked ? 'checked' :null} onclick='checkTodo(${todoData.id}, ${todoData.checked})'/>
      <p>${todoData.todoText}</p>
      <button onclick='deleteTodo(${todo.id})'>x</button>
      </li>`
    }).join('')}`
}

const deleteTodo  = async (id) => {
  await deleteDoc(doc(db, "todo", id));
  // paintTodoList()
}

const checkTodo = async (id, checked) => {
  await updateDoc(doc(db, 'todo', id), {
    checked: !checked
  });
  // paintTodoList()
}

paintTodoList()