// Get references to the input field, button, and list
const input = document.getElementById("#favchap");
const button = document.getElementById("button");
const list = document.getElementById("#list");

// Function to handle adding chapters
button.addEventListener('click', function() {

    // Check if the input is not blank
    if (input.value != '') {
        // Create a new list item element
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        //append the li element with the delete button
        li.append(deleteButten);

        //append the li element to the unordered list in your HTML
        list.append(li);

        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        //send the focus to the input element
        input.focus();

        //change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';
    } else {
        // If input is blank, provide a message and set focus to the input field
        alert("Please enter a chapter.");
        input.focus();
    }
});