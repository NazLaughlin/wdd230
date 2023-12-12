const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const forecast = document.querySelector("#forecast");
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.59&lon=-99.25&units=imperial&appid=1e33a259952b78fe97f0cfba78afcbd7'
const forecastUrl= 'https://api.openweathermap.org/data/2.5/forecast?lat=33.59&lon=-99.25&units=imperial&appid=1e33a259952b78fe97f0cfba78afcbd7'

async function apiFetch(){
    try{
        const response = await fetch(weatherUrl);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }

    try{
        const response2 = await fetch(forecastUrl);
        if (response2.ok){
            const data = await response2.json();
            displayForecast(data);
        } else {
            throw Error(await response2.text());
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

function displayForecast(data){
    var days = []
    days.push(data.list[0])
    days.push(data.list[8])
    days.push(data.list[16])
    days.forEach((day) => {
        const high = Math.round(day.main.temp_max);
        const low = Math.round(day.main.temp_min);

        const date = new Date(day.dt * 1000)
        const display = document.createElement("div")
        display.classList.add("weather-card")

        const d = document.createElement("h3")
        d.textContent = `${dayNames[date.getDay()] } ${date.getDate()}`

        const highDisplay = document.createElement("p")
        const highSpan = document.createElement("span")
        highSpan.classList.add("temp-high")
        highSpan.innerHTML = `${high}&deg;F`
        highDisplay.textContent = "H: "
        highDisplay.append(highSpan)

        const lowDisplay = document.createElement("p")
        const lowSpan = document.createElement("span")
        lowSpan.classList.add("temp-low")
        lowSpan.innerHTML = `${low}&deg;F`
        lowDisplay.textContent = "L: "
        lowDisplay.append(lowSpan)

        display.append(d)
        display.append(highDisplay)
        display.append(lowDisplay);
        forecast.append(display);
    })
}



apiFetch();
