import "./css/style.css";
import { WeatherInterfacer } from "./WeatherAPI.js";
import { UIHandler } from "./UIHandler.js";

(() => {
    UIHandler.init();
    WeatherInterfacer.init();
})();
