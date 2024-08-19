function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(".search-city");
  let currentCity = document.querySelector(".inputcity");
  let cityValue = city.value;
  if (cityValue.length > 4) {
    currentCity.innerHTML = cityValue;
  } else {
    alert("Please input a valid city name🙏");
  }
}

let searchButton = document.querySelector(".submit-search");
searchButton.addEventListener("click", searchCity);
