const baseURL = "https://maheye.github.io/wdd230/";
const linksURL = "https://maheye.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

function displayLinks(weeks) {
    const container = document.getElementById('linksContainer');

    if (!container) {
        console.error("Container element with id 'linksContainer' not found!");
        return;
    }

    let ul = document.createElement('ul');
    container.appendChild(ul);

    weeks.forEach(week => {
        let li = document.createElement('li');
        ul.appendChild(li);

        let weekTitle = document.createElement('span');
        weekTitle.textContent = week.week + ": ";
        li.appendChild(weekTitle);

        week.links.forEach((link, index) => {
            let anchor = document.createElement('a');
            
            if (link.url.startsWith('http://') || link.url.startsWith('https://')) {
                anchor.href = link.url;
            } else {
                anchor.href = baseURL + link.url;
            }
            anchor.textContent = link.title;
            anchor.target = "_blank";
            li.appendChild(anchor);

            
            if (index !== week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                li.appendChild(separator);
            }
        });
    });
}

getLinks();