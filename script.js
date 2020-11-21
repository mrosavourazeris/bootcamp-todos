var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos (){
    //clear existing todos
    todoList.innerHTML = ""
    //re-render todos
    for (var i = 0; i < todos.length; i ++){
        //create li element
        var li = document.createElement("li")
        //add todo text to li
        li.innerText = todos[i]
        //add data-index attribute
        li.setAttribute("data-index", i)
        //create button
        var button = document.createElement("button")
        button.innerText = "Complete"
        li.appendChild(button)
        //append li to ul
        todoList.appendChild(li)
    }
}

function addTodo(event){
    event.preventDefault()
    //get todoInput value
    var newTodo = todoInput.value
    if (newTodo !== ''){
         //push text into todos
    todos.push(newTodo)
    todoInput.value = null
    //call renderTodos
    renderTodos()
    }


}

todoForm.addEventListener("submit", addTodo)

renderTodos()