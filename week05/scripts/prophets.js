const url = `https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json`
const cards = document.querySelector("#cards")

async function getProphetData(){
    var response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prof => {
        const card = document.createElement("section");
        card.setAttribute("class", "card");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        fullName.textContent = `${prof.name} ${prof.lastname}`;
        portrait.setAttribute("src", `${prof.imageurl}`);
        portrait.setAttribute("alt", `portrait of ${fullName.textContent}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        card.append(fullName);
        card.append(portrait);
        cards.appendChild(card);
    });
}

getProphetData();