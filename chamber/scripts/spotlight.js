const spotlight = document.querySelector("#spotlight")
const baseURL = `https://nazlaughlin.github.io/wdd230`;
const linksURL = `${baseURL}/chamber/data/members.json`;

async function getMembers(){
    try {
        const response = await fetch(linksURL);
        if(response.ok){
            const data = await response.json();
            const rand = Math.floor(Math.random() * data.members.length)
            displaySpotlight(data.members[rand]);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error)
    }
}

function displaySpotlight(member){
    const title = document.createElement("h1");
    title.textContent = "Member Spotlight:";

    const name = document.createElement("h2");
    name.textContent = member.name;

    const anchor = document.createElement("a");
    anchor.href = member.url;

    const pic = document.createElement("img");
    pic.src = member.image;
    pic.alt = `Picture of ${member.name} storefront`;

    spotlight.append(title);
    spotlight.append(name);
    anchor.append(pic);
    spotlight.append(anchor);
}

getMembers()