let inpBox = document.querySelector("input");
let search = document.getElementById('seacrvhBtn');
let img = document.querySelector("img");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windspeed");
let notFound = document.querySelector(".location-not-found");
let weather_body = document.querySelector(".weather-body");

async function cheackWeather(city) {
    const api_key = "2532eca08eb3e366e42cc23391d3da1a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let data = await fetch(`${url}`).then(res => res.json());
    if (data.cod === `404`) {
        notFound.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    notFound.style.display = "none";
    weather_body.style.display = "flex";
    temp.innerHTML = `${Math.round(data.main.temp-273.17)}°C`;
    // console.dir(data);
    desc.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}Km/H`;

    switch (data.weather[0].main) {
        case 'Clouds':
            img.src = "./assets/cloud.png";
            break;
        case 'Rain':
            img.src = "./assets/rain.png";
            break;
        case 'Mist':
            img.src = "./assets/mist.png";
            break;
        case 'Snow':
            img.src = "./assets/snow.png";
            break;
        case 'Clear':
            img.src = "./assets/clear.png";
            break;
    }
    inpBox.value = "";
}

search.addEventListener('click', () => {
    cheackWeather(inpBox.value);
});