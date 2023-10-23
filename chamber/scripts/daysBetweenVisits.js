const msToDays = 86400000; 
const theDateToday = new Date();
const lastVisitDate = new Date(Number(localStorage.getItem('lastVisitDate')));
const visitMessage = document.querySelector("#visitMessage");

let daysSinceLastVisit = Math.round((theDateToday - lastVisitDate) / msToDays);


if (!localStorage.getItem('lastVisitDate')) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceLastVisit < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
} else if (daysSinceLastVisit === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
} else {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
}


localStorage.setItem('lastVisitDate', theDateToday.getTime());