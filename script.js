const URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "e1d6042cd850c0e3ce13fc75ff852ca4";

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${URL}weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  //   console.log(result);

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;
};

const searchBar = document.getElementById("searchBar");
//? setQuery fonk. ismi olarak aldim.
searchBar.addEventListener("keypress", setQuery);
