export { getCurrentWeather, getLocation };
async function getLocation(location) {
  try {
    const responseLocations = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=97ee98d25b6e4c3c9bb153401232407&q=${location}`
    );
    const resultLocations = await responseLocations.json();
    return resultLocations;
  } catch (error) {
    const errorMsg = `Cannot retrieve locations : ${error}`;
    console.error(errorMsg);
    return errorMsg;
  }
}

async function getCurrentWeather(location) {
  try {
    const currentWeatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=97ee98d25b6e4c3c9bb153401232407&q=${location}&days=3`
    );
    const currentWeatherResult = await currentWeatherResponse.json();
    return currentWeatherResult;
  } catch (error) {
    const errorMsg = `Cannot retrieve Weather Details : ${error}`;
    console.error(errorMsg);
    return errorMsg;
  }
}
