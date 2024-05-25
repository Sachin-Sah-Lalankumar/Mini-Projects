const apiKey = "856c6e23ffa425397cf6b34def794e0b";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");
const weatherIcon = document.querySelector("#weatherIcon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    weatherIcon.className = "weather-icon";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.classList.add("fas", "fa-cloud-sun-rain");
      weatherIcon.style.color = "#8399E5";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.classList.add("fas", "fa-cloud-moon");
      weatherIcon.style.color = "#939597";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.classList.add("fas", "fa-cloud-showers-heavy");
      weatherIcon.style.color = "#4A90E2";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.classList.add("fas", "fa-cloud-rain");
      weatherIcon.style.color = "#76C7C0";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.classList.add("fas", "fa-sun");
      weatherIcon.style.color = "#FFD700";
    } else {
      weatherIcon.classList.add("fas", "fa-question");
      weatherIcon.style.color = "#000";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
