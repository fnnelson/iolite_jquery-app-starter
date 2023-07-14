$(document).ready(onReady);

// set global variable, so it changes only when function is run (since we have todoCount++ in the function)
let todoCount = 2;

function onReady() {
  console.log('jQuery still works! What a gosh darn relief.');
  $('#submitButton').on('click', handleSubmit);

  //handlers
  $("#todoList").on('click', '.deleteButton', deleteTodo)
}


function deleteTodo() {
  console.log("What is this!?", $(this));

  //remove the list item from the parent
  $(this).parent().remove();
  //decrease the todoCount by 1
  todoCount--;

  //replace todoCount count on the dom with updated count
  $("#todoCount").text(todoCount);
}


function handleSubmit(event) {
  event.preventDefault();
  console.log("inside handleSubmit")

  //receive todo text from input box
  const todoText = $('#todoInput').val()
  console.log("todoText:", todoText);

  const authorText = $('#authorInput').val()
  console.log("authorText:", authorText);

  //append new item to dom from captured input
  $('#todoList').append(`
  <li>
  <button class="deleteButton">❌</button>
  ${todoText} (${authorText})
  </li>
  `)

  //clearing the form setting the value to an empty string
  $("#todoInput").val("")
  $("#authorInput").val("")

  //increasing the count
  todoCount++

  $("#todoCount").text(todoCount);
}