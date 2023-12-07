const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=imperial&appid=1e33a259952b78fe97f0cfba78afcbd7'

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.alt = data.weather[0].description;
    captionDesc.textContent = data.weather[0].description;
}

apiFetch();
