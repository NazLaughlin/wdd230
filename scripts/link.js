const baseURL = `https://nazlaughlin.github.io/`;
const linksURL = `${baseURL}/data/links.json`;

async function getLinks(){
    try {
        const response = await fetch(linksURL);
        if(response.ok){
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error)
    }
}

getLinks()