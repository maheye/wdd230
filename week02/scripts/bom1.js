const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback");

button.addEventListener("click", () => {
  if (input.value != "") {
    console.log("Clicked");
    feedback.textContent = "";
  } else {
    input.focus(); //focus() will focus the input. focus() is a method.
    feedback.textContent = "Please enter a Book and Chapter.";
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = input.value;

  deleteButton.textContent = "❌";

  li.append(deleteButton);

  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
  });

  input.focus();
  input.value = "";
});