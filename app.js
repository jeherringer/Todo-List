// SELECTORS BELOW

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// EVENT LISTENERS BELOW

    // event listener for adding a new todo

        todoButton.addEventListener('click', addTodo);

    // event listener for deleting a todo

        todoList.addEventListener('click', deleteCheck);

    // event listener for filtering todos

        filterOption.addEventListener('click', filterTodo);

// FUNCTIONS BELOW

function addTodo(event) {

    event.preventDefault();

    // add a todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // make a check mark button to mark complete

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="far fa-check-circle fa-lg"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    // create a list

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // attach the due date 

    const date = document.createElement('p');
    date.innerText = ("today")
    date.classList.add("todo-date");
    todoDiv.appendChild(date);

    // make a delete button to remove

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times fa-lg"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    

    // append to the todo list

    todoList.appendChild(todoDiv);

    // clear the value of the input field

    todoInput.value = " ";

}

function deleteCheck(e) {

    // designate which todo is clicked on

        const item = e.target;

    // delete the todo that is clicked

        if (item.classList[0] === 'delete-btn') {
            const todo = item.parentElement;
            todo.classList.add("fade");
            todo.addEventListener('transitionend', function() {
            todo.remove();
            });
        }   
        

    //check if todo is done
        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }

        
}

function filterTodo(e) {

    const todos = todoList.childNodes;
    console.log(todos);

    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}


        