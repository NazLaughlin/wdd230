const spotlight = document.querySelector("#spotlight")
const baseURL = `https://nazlaughlin.github.io/wdd230`;
const linksURL = `${baseURL}/chamber/data/members.json`;

async function getMembers(){
    try {
        const response = await fetch(linksURL);
        if(response.ok){
            const data = await response.json();
            const spotlightEligible = data.members.filter((member) => member.membership != "Bronze");
            const rand = Math.floor(Math.random() * spotlightEligible.length)
            const a = Math.floor(Math.random() * 2);
            const b = Math.floor(Math.random() * 2);
            const randUp = rand + (a > 0 ? a : 1);
            const randDown = rand - (b > 0 ? b : 1);
            if(randUp > spotlightEligible.length){
                randUp = randUp - spotlightEligible.length;
            }

            if(randDown < 0){
                randDown = randDown + spotlightEligible.length;
            }

            displaySpotlight(data.members[rand]);
            displaySpotlight(data.members[randUp]);
            displaySpotlight(data.members[randDown]);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error)
    }
}

function displaySpotlight(member){
    const name = document.createElement("h2");
    name.textContent = member.name;

    const anchor = document.createElement("a");
    anchor.href = member.url;

    const pic = document.createElement("img");
    pic.src = member.image;
    pic.alt = `Picture of ${member.name} storefront`;

    spotlight.append(name);
    anchor.append(pic);
    spotlight.append(anchor);
}

getMembers()