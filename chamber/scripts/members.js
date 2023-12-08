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
        
    });
}

getMembers()