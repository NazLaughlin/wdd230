const list = document.querySelector("#display")
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

        const level = document.createElement("p")
        level.textContent = member.membership

        const address = document.createElement("p")
        address.textContent = member.address;

        const phone = document.createElement("p")
        phone.textContent = member.phone

        const website = document.createElement("a")
        website.href = member.url
        website.textContent = "Website"

        memberSection.append(pic);
        memberSection.append(title);
        memberSection.append(level)
        memberSection.append(address);
        memberSection.append(phone)
        memberSection.append(website)

        list.appendChild(memberSection);
    });
}

function displayList(){
    list.classList.add("list")
    list.classList.remove("grid")
}

function displayGrid(){
    list.classList.add("grid")
    list.classList.remove("list")
}

const gridRadio = document.querySelector("#grid");
const listRadio = document.querySelector("#list");
gridRadio.addEventListener("click", displayGrid);
listRadio.addEventListener("click", displayList)

getMembers()