//confirm page
function storeData() {
    const username = document.querySelector("#name").value;
    const userLastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    sessionStorage.setItem('name', username);
    sessionStorage.setItem('lastName', userLastName);
    sessionStorage.setItem('email', email);
}

function storeData() {
    const username = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
}

document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');

    if(username && email) {
        const thanksHeader = document.getElementById("thanksHeader");
        const thanksMessage = document.getElementById("thanksMessage");

        thanksHeader.textContent = `Welcome, ${username}!`;
        thanksMessage.textContent = `Thank you for registering. We've got your email at ${email} and have taken note of your page rating.`;
    }
});