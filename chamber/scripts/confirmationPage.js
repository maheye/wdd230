document.addEventListener("DOMContentLoaded", function() {
   
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", storeData);
    }

    
    const username = sessionStorage.getItem('username');
    const userLastName = sessionStorage.getItem('lastName');
    const email = sessionStorage.getItem('email');
    const timestampValue = sessionStorage.getItem('timestamp');
    
    
    if (username && email) {
        const thanksHeader = document.getElementById("thanksHeader");
        const thanksMessage = document.getElementById("thanksMessage");
        if (thanksHeader && thanksMessage) {
            thanksHeader.textContent = `Welcome, ${username} ${userLastName}!`;
            thanksMessage.textContent = `Thank you for registering.`;
        }
    }

    if (timestampValue) {
        const timestampElement = document.getElementById("showTimestamp");
        if (timestampElement) {
            timestampElement.textContent = `${timestampValue}`;
        }
    }
});

function storeData(event) {
    event.preventDefault(); 

    const username = document.querySelector("#firstName").value;
    const userLastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const timestamp = document.querySelector("#timestamp").value;

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('lastName', userLastName);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('timestamp', timestamp);

    window.location.href = "./thankyou.html"; 
}