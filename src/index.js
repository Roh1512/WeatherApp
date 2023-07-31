import "./style.css";
import { getCurrentWeather, getLocation } from "./updateWeather";
import { createHomePage, populateSuggestionList, getWeather } from "./homepage";

createHomePage();
populateSuggestionList();
getWeather();

/* const a = await getLocation("paris");
console.log(a);
const b = await getCurrentWeather(a[0]);
console.log(b);
console.log("Hi"); */
