const list = document.querySelector("#links")
const baseURL = `https://nazlaughlin.github.io/wdd230`;
const linksURL = `${baseURL}/chamber/data/members.json`;

async function getMembers(){
    try {
        const response = await fetch(linksURL);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayMembers(data.members);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error)
    }
}

async function displayMembers(members){
    members.forEach(member => {
        const memberSection = document.createElement("section")
        const pic = document.createElement("img")
        pic.src = member.image
        pic.alt = `Picture of ${member.name} storefront`
        
        const title = document.createElement("h3")
        title.textContent = member.name
        title.classList.add("c1");

        const address = document.createElement("p")
        address.textContent = member.address;
        address.classList.add("c2")
    });
}

getMembers()