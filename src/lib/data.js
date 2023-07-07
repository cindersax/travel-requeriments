/* Base URLs needed */
const URL_ICONS = 'https://cdn.joinsherpa.io/icons';
const URL_TRIPS_V3 =
  'https://requirements-api.sandbox.joinsherpa.com/v3/trips?include=restriction,procedure';

/* Sandbox Key, DO NOT USE IN PRODUCTION */
const API_KEY_TRIPS_V3 = 'AIzaSyCd3jDrVQKwFnj_hk3j1gIjkqCghP3c3TY';

/* Example travel itinery */
const REQUEST_TRIPS_V3 = {
  "data": {
    "type": "TRIP",
    "attributes": {
      "traveller": {
        "passports": [
          "COL"
        ],
        "vaccinations": [
          {
            "type": "COVID_19",
            "status": "FULLY_VACCINATED"
          }
        ]
      },
      "locale": "es-XL",
      "travelNodes": [
        {
          "type": "ORIGIN",
          "departure": {
            "date": "2023-07-12",
            "time": "00:00"
          },
          "locationCode": "USA"
        },
        {
          "type": "DESTINATION",
          "arrival": {
            "date": "2023-07-12",
            "time": "00:00"
          },
          "locationCode": "COL"
        }
      ]
    }
  }
}

export {URL_TRIPS_V3,API_KEY_TRIPS_V3,REQUEST_TRIPS_V3}