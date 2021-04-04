const api = {
    key: "de7af7915647fc16176fb7f7328110ec",
    base: "https://api.openweathermap.org/data/2.5/"
}

var d= new Date();


/** const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        document.getElementById("demo").innerHTML = d.toDateString();
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`;
}

**/


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    document.getElementById("demo").innerHTML = d.toDateString();
    getResults(searchbox.value);
  }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
    return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.location .weather');
    weather_el.innerText = weather.weather[0].main;

}












