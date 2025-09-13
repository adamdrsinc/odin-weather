import { PubSubConsts } from "./PubSubConsts";
import weatherSun from "./resource/img/weather-sunny.svg";
import weatherSnow from "./resource/img/snowflake.svg";
import weatherCloud from "./resource/img/weather-cloudy.svg";
import weatherFog from "./resource/img/weather-fog.svg";
import weatherPartCloud from "./resource/img/weather-partly-cloudy.svg";
import weatherPartCloudNight from "./resource/img/weather-night-partly-cloudy.svg";
import weatherRain from "./resource/img/weather-pouring.svg";
import weatherWind from "./resource/img/weather-windy.svg";

class UIHandler {
    static init() {
        this.addAllSubscribers();
        this.addAllEventListeners();
    }

    //Subscribers
    static addAllSubscribers() {
        PubSub.subscribe(PubSubConsts.DATA_PUBLISHED, (message, data) => {
            if (Object.keys(data).length === 0) {
                this.displayGetLocationError();
            } else {
                this.uiOnDataSubscriptionUpdate(data);
            }
        });
    }

    //Event Listeners
    static addAllEventListeners() {
        this.addSearchButtonListener();
    }

    static addSearchButtonListener() {
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", (e) => {
            document.getElementById("error-box").className = "";

            const locationInput = document.getElementById("input-location");
            PubSub.publish(PubSubConsts.NEW_SEARCH, {
                location: locationInput.value,
            });
            locationInput.value = "";
        });
    }

    //UI Changers
    static uiOnDataSubscriptionUpdate(data) {
        this.uiUpdateLocation(
            data.resolvedAddress,
            data.currentConditions,
            data.days
        );
        this.uiUpdateDays(data.days.slice(0, 10));
    }

    static uiUpdateLocation(resolvedAddress, currentConditions, allDays) {
        const locationTextEl = document.getElementById("location-text");
        locationTextEl.textContent = resolvedAddress
            .split(" ")
            .map((el) => {
                return el.charAt(0).toUpperCase() + el.slice(1);
            })
            .join(" ");

        const currentLocationTempEl = document.getElementById(
            "location-temperature-current"
        );
        currentLocationTempEl.innerHTML = `${currentConditions.temp}`;

        const highLocationTempEl = document.getElementById(
            "location-temperature-high"
        );
        highLocationTempEl.innerHTML = `Hi: ${allDays[0].tempmax}`;

        const lowLocationTempEl = document.getElementById(
            "location-temperature-low"
        );
        lowLocationTempEl.innerHTML = `Low: ${allDays[0].tempmin}`;

        this.setIcon(
            document.getElementById("main-details-icon"),
            allDays[0].icon
        );
    }

    static uiUpdateDays(days) {
        const allCards = document.getElementsByClassName("card");
        Array.from(allCards).forEach((card, index) => {
            const correspondingDay = days[index];

            const [year, month, day] = correspondingDay.datetime.split("-");

            card.querySelector(".card-day").innerText = `${month}-${day}`;
            card.querySelector(".card-temperature-high").innerText =
                correspondingDay.tempmax;
            card.querySelector(".card-temperature-low").innerText =
                correspondingDay.tempmin;

            const icon = card.querySelector(".card-icon");
            this.setIcon(icon, correspondingDay.icon);
        });
    }

    static setIcon(element, iconChoice) {
        console.log(weatherIcons);
        const icons = {
            cloudy: weatherCloud,
            "partly-cloudy-day": weatherPartCloud,
            "partly-cloudy-night": weatherPartCloudNight,
            fog: weatherFog,
            wind: weatherWind,
            snow: weatherSnow,
            rain: weatherRain,
            "clear-day": weatherSun,
            "clear-night": weatherSun,
        };

        const filename = icons[iconChoice] || weatherSun;
        element.src = filename;
    }

    static displayGetLocationError() {
        const errorBoxEl = document.getElementById("error-box");
        errorBoxEl.classList.add("visible-flex");
    }
}

export { UIHandler };
