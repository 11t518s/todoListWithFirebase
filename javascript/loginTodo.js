import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getFirestore , collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


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
const auth = getAuth();
let uid = ''

document.getElementById('addTodoButton').addEventListener('click', async (event) => {
  event.preventDefault()
  const todoText = document.getElementById('todoInput');

  // await addDoc(collection(db, "todo"), {
  //   todoText: todoText.value,
  //   checked: false,
  //   createdAt: serverTimestamp()
  // })

  await addDoc(collection(db, "todoList", uid, 'myTodo'), {
    todoText: todoText.value,
    checked: false,
    createdAt: serverTimestamp()
  })
  todoText.value = ''
  paintTodoList()
});


const paintTodoList = async () => {
  // const todoList = await getDocs(collection(db, "todo"))
  // const todoElement = document.getElementById('todoList')

  // todoList 만든 순서대로
  // const todoListRef = collection(db, "todo");
  // const orderedTodoList = await getDocs(query(todoListRef, orderBy('createdAt')))
  // const todoElement = document.getElementById('todoList')

  // const todoList = await getDocs(collection(db, "todoList", uid, 'myTodo'))
  // const todoElement = document.getElementById('todoList')
  // console.log(todoList.docs)

  // todoList 만든 순서대로
  const todoListRef = collection(db, "todoList", uid, "myTodo");
  const orderedTodoList = await getDocs(query(todoListRef, orderBy('createdAt')))
  const todoElement = document.getElementById('todoList')

  todoElement.innerHTML = `${orderedTodoList.docs.map(todo => {
    const todoData = todo.data()

    return `
      <div>  
        <li class="todoItem">
          <input class="checkButton" type='checkbox' ${todoData.checked ? 'checked' :null} id=${todo.id}/>
          <p>${todoData.todoText}</p>
          <button class="deleteButton" id=${todo.id}>x</button>
        </li>
      </div>`
    }).join('')}`
};

const deleteTodo =  async (id) => {
  // await deleteDoc(doc(db, "todo", id))
  await deleteDoc(doc(db, "todoList", uid, 'myTodo', id))
  await paintTodoList()
 };
 
const checkTodo = async (id, checked) => {
  //  await updateDoc(doc(db, 'todo', id), {
  //    checked: checked
  //  });
  await updateDoc(doc(db, 'todoList', uid, 'myTodo', id), {
    checked: checked
  });
   await paintTodoList()
 };

document.addEventListener('click', async (event) => {
  event.preventDefault()

  if(event.target.className === 'checkButton') {
    await checkTodo(event.target.id, event.target.checked)
  }

  if(event.target.className === 'deleteButton') {
    await deleteTodo(event.target.id)
  }
})

onAuthStateChanged (auth, (user) => {
  if (user) {
    uid = user.uid
    paintTodoList()
  } else {
    alert('로그인 후 사용 해주세요!')
    location.href = 'login.html'
  }
})



// paintTodoList()