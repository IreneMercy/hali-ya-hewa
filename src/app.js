function updateWeatherDetails(response) {
  let currentTemp = document.querySelector("#temperature");
  let currentCity = document.querySelector(".inputcity");
  let weatherDescription = document.querySelector("#description");
  let currentHumidity = document.querySelector("#hum");
  let currentWind = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img
            
            class="emoji"
            src="${response.data.condition.icon_url}"
            alt="weather"
          />`;

  currentTemp.innerHTML = `${Math.round(
    response.data.temperature.current
  )}<sup class ="unit-small">°C</sup>`;
  weatherDescription.innerHTML = response.data.condition.description;
  timeElement.innerHTML = formatDate(date);
  currentCity.innerHTML = response.data.city;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  currentWind.innerHTML = `${response.data.wind.speed}km/h`;
}
function formatDate(date) {
  let min = date.getMinutes();
  let hour = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (min < 10) {
    min = `0${min}`;
  }
  return `${day} ${hour}:${min}`;
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

function weatherForecast() {
  let forecast = document.querySelector("#forecast");
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastSkeleton = "";
  days.forEach(function (day) {
    forecastSkeleton =
      forecastSkeleton +
      `
    <div class="weather-forecast-today">
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon">⛅</div>
      <div class="weather-forecast-temperatures">
        <div class="weather-forecast-temperature"><strong>15°</strong></div>
        <div class="weather-forecast-temperature">9°</div>
      </div>
    </div>
    `;
  });
  forecast.innerHTML = forecastSkeleton;
}

let searchButton = document.querySelector("#submit-search");
searchButton.addEventListener("click", inputValue);
searchCity("Nairobi");
weatherForecast();
