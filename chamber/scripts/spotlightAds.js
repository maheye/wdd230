async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json'); 
        if (!response.ok) throw new Error('Failed fetching members data.');
        return await response.json();
    } catch (error) {
        console.error("Error fetching members:", error);
        return null;
    }
}

function displaySpotlights(members) {
    if (!members) return;  

    const qualifiedMembers = members.filter(member => ['Silver', 'Gold'].includes(member.membershipLevel));
    const randomMembers = [];

    for (let i = 0; i < 3 && qualifiedMembers.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    const spotlightsContainer = document.querySelector('.spotlights-container');
    randomMembers.forEach(member => {
        const spotlightCard = document.createElement('figure');
        spotlightCard.classList.add('spotlight-card', 'card');

        const image = document.createElement('img');
        image.src = member.image;
        image.alt = member.name;
        image.title = member.name;
        image.className = 'card__image';

        const caption = document.createElement('figcaption');
        caption.className = 'card__body';

        const title = document.createElement('h2');
        title.textContent = member.name;
        title.className = 'card__title';

        const description = document.createElement('p');
        description.textContent = member.membershipLevel + ' Member';
        description.className = 'card__description';

        caption.appendChild(title);
        caption.appendChild(description);
        spotlightCard.appendChild(image);
        spotlightCard.appendChild(caption);
        spotlightsContainer.appendChild(spotlightCard);
    });
}

async function initSpotlights() {
    const data = await fetchMembers();
    const members = data ? data.members : null;
    displaySpotlights(members);
}

initSpotlights();