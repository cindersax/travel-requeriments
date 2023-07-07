/* Base URLs needed */
const URL_ICONS = 'https://cdn.joinsherpa.io/icons';
const URL_TRIPS_V3 =
  'https://requirements-api.sandbox.joinsherpa.com/v3/trips?include=restriction,procedure';

/* Sandbox Key, DO NOT USE IN PRODUCTION */
const API_KEY_TRIPS_V3 = 'AIzaSyAqD2UB9rjUl0A2jvh_xiiKsJowbc7-eM8';
;

const getVisaRequirements = async (originCountry, destinationCountry) => {
  const response = await fetch(URL_TRIPS_V3, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/vnd.api+json',
      'x-api-key': API_KEY_TRIPS_V3,
    },
    body: JSON.stringify(
        {
            data: {
              type: 'TRIP',
              attributes: {
                traveller: {
                  passports: [originCountry]
                },
                locale: 'en-US',
                travelNodes: [
                  {
                    type: 'ORIGIN',
                    departure: {
                      date: new Date(),
                      time: '01:00',
                      travelMode: 'AIR',
                    },
                    locationCode: originCountry,
                  },
                  {
                    type: 'DESTINATION',
                    arrival: {
                      date: new Date(),
                      time: '23:00',
                      travelMode: 'AIR',
                    },
                    locationCode: destinationCountry,
                  },
                ],
              },
            },
          }
    ),
  });

  const { data, included } = await response.json();
  const {attributes} = data
  const { travelNodes} = attributes
  

  return {
    origin: travelNodes[0].locationName,
    destination: travelNodes[1].locationName,
    requirements: included
}
};

export async function load({params}) {
    return {
        tripInfo: await getVisaRequirements(params.origin, params.destination)
    };
}



