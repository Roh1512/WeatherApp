import logoImg from "./Icons/logo.svg";
import { getLocation, getCurrentWeather } from "./updateWeather";

export {
  createHomePage,
  populateSuggestionList,
  getWeather,
  toggleTemperatureUnits,
};

function createHomePage() {
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "contentDiv");
  contentDiv.classList.add("contentDiv");

  const body = document.querySelector("body");
  body.appendChild(createHeader());
  body.appendChild(contentDiv);
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute("id", "header");

  const logoDiv = document.createElement("logo");
  logoDiv.classList.add("logoDiv");
  logoDiv.setAttribute("id", "logoDiv");
  const logo = new Image();
  logo.src = logoImg;
  logoDiv.appendChild(logo);

  header.appendChild(logoDiv);
  header.appendChild(createSearchForm());

  return header;
}

function createSearchForm() {
  const form = document.createElement("form");
  form.classList.add("searchForm");
  form.setAttribute("id", "searchForm");

  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", "inputField");
  inputField.setAttribute("placeholder", "Search for a city.");
  inputField.setAttribute("list", "suggestionList");
  inputField.setAttribute("required", "");
  inputField.classList.add("searchInputField");

  const suggestionList = document.createElement("datalist");
  suggestionList.setAttribute("id", "suggestionList");
  suggestionList.classList.add("suggestionList");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Search";

  form.appendChild(inputField);
  form.appendChild(submitBtn);
  form.appendChild(suggestionList);
  return form;
}

function populateSuggestionList() {
  const inputField = document.getElementById("inputField");
  const suggestionList = document.getElementById("suggestionList");
  inputField.addEventListener("input", () => {
    const locations = new Promise((resolve, reject) => {
      resolve(getLocation(inputField.value));
    });
    locations
      .then((locations) => {
        locations.forEach((location) => {
          const option = document.createElement("option");
          option.value = `${location.name}, ${location.country}, ${location.region}`;
          suggestionList.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("'locations' array is empty. ", error);
      });
  });
}

function getWeather() {
  const form = document.getElementById("searchForm");
  const inputField = document.getElementById("inputField");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const weatherDetails = new Promise((resolve, reject) => {
      resolve(getCurrentWeather(inputField.value));
    });
    weatherDetails.then((weatherDetails) => {
      const contentDiv = document.getElementById("contentDiv");
      contentDiv.innerHTML = "";
      displayWeather(weatherDetails);
    });
  });
}

function displayWeather(weatherDetails) {
  const contentDiv = document.getElementById("contentDiv");

  const toggleUnitBtn = document.createElement("button");
  toggleUnitBtn.classList.add("toggleUnitBtn");
  toggleUnitBtn.setAttribute("id", "toggleUnitBtn");
  toggleUnitBtn.setAttribute("type", "button");
  toggleUnitBtn.setAttribute("data-status", "celcius");
  toggleUnitBtn.textContent = "\u00B0C";

  const weatherDiv = document.createElement("div");
  weatherDiv.setAttribute("id", "weatherDiv");
  weatherDiv.classList.add("weatherDiv");

  const locationHeading = document.createElement("h1");
  locationHeading.classList.add("locationHeading");
  locationHeading.textContent = `${weatherDetails.location.name}, ${weatherDetails.location.country}`;

  const weatherConditionText = document.createElement("div");
  weatherConditionText.classList.add("weatherConditionText");
  weatherConditionText.textContent = weatherDetails.current.condition.text;

  const temperature = document.createElement("div");
  temperature.classList.add("temperature");
  temperature.setAttribute("id", "temperature");

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feelsLike");
  feelsLike.setAttribute("id", "feelsLike");
  feelsLike.classList.add("moreWeatherDetails");

  const wind = document.createElement("div");
  wind.classList.add("moreWeatherDetails");
  wind.textContent = `Wind : ${weatherDetails.current.wind_mph} MPH`;

  const humidity = document.createElement("div");
  humidity.classList.add("moreWeatherDetails");
  humidity.textContent = `Humidity : ${weatherDetails.current.humidity}%`;
  const unitStatus = toggleUnitBtn.getAttribute("data-status");
  if (unitStatus === "celcius") {
    temperature.textContent = `${weatherDetails.current.temp_c}\u00B0C`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_c}\u00B0C`;
  } else {
    temperature.textContent = `${weatherDetails.current.temp_f}\u00B0F`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_f}\u00B0F`;
  }

  const weatherContent = document.createElement("div");
  weatherContent.classList.add("weatherContent");
  weatherContent.appendChild(temperature);
  const moreWeatherDeteilsDiv = document.createElement("div");

  moreWeatherDeteilsDiv.classList.add("moreWeatherDetailsDiv");
  moreWeatherDeteilsDiv.appendChild(feelsLike);
  moreWeatherDeteilsDiv.appendChild(wind);
  moreWeatherDeteilsDiv.appendChild(humidity);

  weatherContent.appendChild(moreWeatherDeteilsDiv);

  weatherDiv.appendChild(locationHeading);
  weatherDiv.appendChild(weatherConditionText);
  weatherDiv.appendChild(weatherContent);
  toggleUnitBtn.addEventListener("click", () => {
    toggleTemperatureUnits(weatherDetails, toggleUnitBtn);
  });

  const weatherImg = new Image();
  weatherImg.src = weatherDetails.current.condition.icon;
  weatherImg.classList.add("weatherImg");
  weatherDiv.appendChild(weatherImg);
  weatherDiv.appendChild(toggleUnitBtn);
  contentDiv.appendChild(weatherDiv);
}

function toggleTemperatureUnits(weatherDetails, toggleUnitBtn) {
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");

  const weatherDiv = document.getElementById("weatherDiv");

  if (toggleUnitBtn.getAttribute("data-status") === "celcius") {
    toggleUnitBtn.setAttribute("data-status", "farenheit");
    toggleUnitBtn.textContent = "\u00B0F";

    temperature.textContent = `${weatherDetails.current.temp_f}\u00B0F`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_f}\u00B0F`;
  } else {
    toggleUnitBtn.setAttribute("data-status", "celcius");
    toggleUnitBtn.textContent = "\u00B0C";

    temperature.textContent = `${weatherDetails.current.temp_c}\u00B0C`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_c}\u00B0C`;
  }
}
