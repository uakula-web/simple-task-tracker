// 1. Select the core elements from the webpage HTML structure
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// 2. Create a function to add a new task item into the list container
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks to the dashboard layout
    if (taskText === '') {
        alert('Please enter a task before clicking add!');
        return;
    }

    // Create a new list item (<li>) tag dynamically
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a red delete button (<button>) tag for this specific task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Link a click event listener to this specific delete button to remove the item
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Append the delete button into the list item, and append the list item to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Reset the input box value back to empty for the next task entry
    taskInput.value = '';
    taskInput.focus();
}

// 3. Listen for direct mouse clicks on the main "Add Task" button
addBtn.addEventListener('click', addTask);

// 4. Also listen for the "Enter" keyboard key press inside the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});