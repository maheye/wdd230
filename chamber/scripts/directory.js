const url = './data/members.json';
const cards = document.querySelector('#membersContainer');

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.members);
}

getDirectoryData();

const displayDirectory = (members) => {
    members.forEach((member) => {
        
        let card = document.createElement('section');
        card.className = 'member-card';
        let name = document.createElement('h2');
        name.className = 'member-name';
        let address = document.createElement('p');
        address.className = 'member-address';
        let phone = document.createElement('p');
        phone.className = 'member-phone';
        let website = document.createElement('a');
        website.className = 'member-website';
        let membershipLevel = document.createElement('p');
        membershipLevel.className = 'member-level';
        let additionalInfo = document.createElement('p');
        additionalInfo.className = 'member-info';
        let image = document.createElement('img');
        image.className = 'member-image';

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.href = member.website;
        website.textContent = `Visit Website`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        additionalInfo.textContent = member.additionalInfo;
        image.setAttribute('src', member.image);  
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');  
        image.setAttribute('width', '640px');
        image.setAttribute('height', '400px');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(additionalInfo);
        card.appendChild(image);
        cards.appendChild(card);
    });
};