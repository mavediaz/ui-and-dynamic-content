function addItem(){

  // get todo list element
  let todoList = document.getElementById("todoList");
  // create new to do list item element
  let listItem = document.createElement("LI");
  // get to do input element
  let todoInput = document.getElementById("todoInput");

  // check length of todo input value
  if (todoInput.value.length < 1 ){
    // show warning if nothing was entered
    document.getElementById("feedback").textContent = 'Nothing entered!';
    // put cursor back into todo input element
    todoInput.focus();
    // exit function
    return;
  }

  // reset the warning text
  document.getElementById("feedback").textContent = '';

  // add todo input value to the new list item
  listItem.textContent = todoInput.value;
  // add new list item to the todo list ul
  todoList.appendChild(listItem);

  // reset the to do input value to empty
  todoInput.value = '';
  // put cursor back into to do input element
  todoInput.focus();

}
