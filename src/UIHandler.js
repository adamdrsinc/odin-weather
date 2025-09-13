import { PubSubConsts } from "./PubSubConsts";

class UIHandler {
    static init() {
        this.addAllSubscribers();
        this.addAllEventListeners();
    }

    //Subscribers
    static addAllSubscribers() {
        PubSub.subscribe(PubSubConsts.DATA_PUBLISHED, (message, data) => {
            console.log(data);
            this.uiOnDataSubscriptionUpdate(data);
        });
    }

    //Event Listeners
    static addAllEventListeners() {
        this.addSearchButtonListener();
    }

    static addSearchButtonListener() {
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", (e) => {
            const locationInput = document.getElementById("input-location");
            PubSub.publish(PubSubConsts.NEW_SEARCH, {
                location: locationInput.value,
            });
            locationInput.value = "";
        });
    }

    //UI Changers
    static uiOnDataSubscriptionUpdate(data) {
        this.uiUpdateLocation(data.address, data.currentConditions, data.days);
        this.uiUpdateDays(data.days);
    }

    static uiUpdateLocation(address, currentConditions, allDays) {
        const locationTextEl = document.getElementById("location-text");
        locationTextEl.textContent = address;

        const currentLocationTempEl = document.getElementById(
            "location-temperature-current"
        );
        currentLocationTempEl.innerHTML = `${currentConditions.temp}<span class="celsius">&#8451;</span>`;

        const highLocationTempEl = document.getElementById(
            "location-temperature-high"
        );
        highLocationTempEl.innerHTML = `Hi: ${allDays[0].tempmax}<span class="celsius">&#8451;</span>`;

        const lowLocationTempEl = document.getElementById(
            "location-temperature-low"
        );
        lowLocationTempEl.innerHTML = `Low: ${allDays[0].tempmin}<span class="celsius">&#8451;</span>`;
    }

    static uiUpdateDays(days) {}
}

export { UIHandler };
