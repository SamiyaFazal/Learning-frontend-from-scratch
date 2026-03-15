const apikey= "7c9a9783c05ef08c05e02c367b837736"
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBar= document.querySelector(".search-bar");
let searchBtn= document.querySelector(".search button");

const city= document.querySelector(".city");
const temp= document.querySelector(".temp");
const description= document.querySelector(".description");
const humidity= document.querySelector(".humidity");
const wind= document.querySelector(".wind");


async function weathercheck(cityname) {
    const response = await fetch(apiurl + cityname + `&appid=${apikey}`);
    if (response.status == 404){
        alert("City name is invalid");
        return;
    }
    const data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= "Weather in " + data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML= data.weather[0].description;
    document.querySelector(".humidity").innerHTML= "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= "Wind: " + data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", function(){
    weathercheck(searchBar.value);

});

searchBar.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        weathercheck(searchBar.value);
    }
});


