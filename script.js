$(document).ready(onReady);

// set global variable, so it changes only when function is run (since we have todoCount++ in the function)
let todoCount = 2;

function onReady() {
  console.log('jQuery still works! What a gosh darn relief.');
  $('#submitButton').on('click', handleSubmit);
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
  <button>❌</button>
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