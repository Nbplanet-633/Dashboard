let addToDoBtn = document.getElementById('taskAdd-Btn');
let toDoContainer = document.getElementById('todo-Container');
let inputField = document.getElementById('todo-input');

addToDoBtn.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('task-styles');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function() {
        paragraph.style.color = "Red";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
    
});

console.log("Hello World");