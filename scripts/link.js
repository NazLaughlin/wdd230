const list = document.querySelector("#links")
const baseURL = `https://nazlaughlin.github.io/wdd230/`;
const linksURL = `${baseURL}data/links.json`;

async function getLinks(){
    try {
        const response = await fetch(linksURL);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayLinks(data);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error)
    }
}

async function displayLinks(weeks){
    weeks.weeks.forEach(week => {
        const weekItem = document.createElement("li")
        weekItem.textContent = week.week;
        list.appendChild(weekItem);
        week.links.forEach(link => {
            const anchorItem = document.createElement("li")
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchorItem.appendChild(anchor);
            list.appendChild(anchorItem);
        })
        const spacingItem = document.createElement("li");
        spacingItem.textContent = "-----------------------"
        list.appendChild(spacingItem);
    });
}

getLinks()