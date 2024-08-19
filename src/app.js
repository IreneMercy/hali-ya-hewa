function updateWeatherDetails(response) {
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(response.data.temperature.current) + "°";
  let currentCity = document.querySelector(".inputcity");
  currentCity.innerHTML = response.data.city;
}
function searchCity(city) {
  let apiKey = "b8a2a2of6ef0b2dad8384b77f37302t6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherDetails);
}

function inputValue(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city");
  searchCity(city.value);
}

let searchButton = document.querySelector("#submit-search");
searchButton.addEventListener("click", inputValue);
searchCity("Nairobi");
