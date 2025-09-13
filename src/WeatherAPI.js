import API_KEY from "./Secret.js";
import PubSub from "pubsub-js";
import { PubSubConsts } from "./PubSubConsts.js";

class WeatherInterfacer {
    static #BASE_URL =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    static init() {
        PubSub.subscribe(PubSubConsts.NEW_SEARCH, (message, data) => {
            const location = data.location;
            this.getData(location);
        });
    }

    static async getData(location, startDate = "", endDate = "") {
        try {
            let completeURL = this.#BASE_URL;

            location = location.toLowerCase();
            completeURL += `${location}`;

            if (startDate) {
                completeURL += `/${startDate}`;
                if (endDate) {
                    completeURL += `/${endDate}`;
                }
            }

            const response = await fetch(`${completeURL}?key=${API_KEY}`);

            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            const dataToPublish = {
                address: data.address,
                days: data.days,
                currentConditions: data.currentConditions,
            };

            PubSub.publish(PubSubConsts.DATA_PUBLISHED, dataToPublish);
        } catch (error) {
            PubSub.publish(PubSubConsts.DATA_PUBLISHED, {});
        }
    }
}

export { WeatherInterfacer };
