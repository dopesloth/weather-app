function formatDate(date) {
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }

  let hour = date.getHours();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[date.getDay()];
  return `${formattedDay} ${hour}:${minute}`;
}

let currentTimeElement = document.querySelector(".date-time");
let currentTime = new Date();

currentTimeElement.innerHTML = formatDate(currentTime);

let search = document.querySelector(".submit-button");
let form = document.querySelector(".city-form");

function displayTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let currentTemp = document.querySelector(".current-temp");
  currentTemp.innerHTML = `${temp}°F`;
}

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let city = cityInput.value;
  const apiKey = "c8e21939ob5bfbb2ea332t339f450f8b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayTemp);
}
form.addEventListener("submit", citySearch);

// let city = prompt("Enter a city");
// city = city.toLowerCase();

// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// if (city in weather) {
//   alert(
//     `It is currently ${Math.round(weather[city].temp)}°C (${Math.round(
//       celsiusToFahrenheit(Math.round(weather[city].temp))
//     )}°F) in ${city[0].toUpperCase(0) + city.slice(1)} with a humidity of ${
//       weather[city].humidity
//     }%.`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
