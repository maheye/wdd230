//confirm passwords
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const messageContainer = document.createElement("div");

confirmPassword.after(messageContainer);

confirmPassword.addEventListener("focusout", checkSame);

function checkSame() {
	if (password.value !== confirmPassword.value) {
		messageContainer.textContent = "❗Passwords DO NOT MATCH!";
		messageContainer.style.display = "block";
		confirmPassword.style.backgroundColor = "#fff0f3";
		confirmPassword.value = "";
		confirmPassword.focus();
	} else {
		messageContainer.style.display = "none";
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.style.color = "#000";
	}
}

//range value

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
