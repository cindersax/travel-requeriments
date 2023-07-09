/* Base URLs needed */
import { error, redirect } from "@sveltejs/kit";
const URL_ICONS = 'https://cdn.joinsherpa.io/icons';
const URL_TRIPS_V3 =
  'https://requirements-api.sandbox.joinsherpa.com/v3/trips?include=restriction,procedure';

/* Sandbox Key, DO NOT USE IN PRODUCTION */
const API_KEY_TRIPS_V3 = 'AIzaSyAqD2UB9rjUl0A2jvh_xiiKsJowbc7-eM8';
;

const getVisaRequirements = async (lang, originCountry, destinationCountry) => {
  try {
    const response = await fetch(URL_TRIPS_V3, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/vnd.api+json',
        'x-api-key': API_KEY_TRIPS_V3,
      },
      body: JSON.stringify({
        data: {
          type: 'TRIP',
          attributes: {
            traveller: {
              passports: [originCountry],
            },
            locale: lang,
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
      }),
    });

    if (!response.ok) {
      throw error(404,'Trip not found');
    }

    const { data, included } = await response.json();
    const { attributes } = data;
    const { travelNodes } = attributes;

    const titles = {
      en: `Travel requirements to ${travelNodes[1].locationName} from ${travelNodes[0].locationName}.`,
      es: `Requisitos de viaje a ${travelNodes[1].locationName} desde ${travelNodes[0].locationName}.`,
      de: `Reiseanforderungen nach ${travelNodes[1].locationName} von ${travelNodes[0].locationName}.`,
      fr: `Exigences de voyage vers ${travelNodes[1].locationName} depuis ${travelNodes[0].locationName}.`,
      pt: `Requisitos de viagem para ${travelNodes[1].locationName} a partir de ${travelNodes[0].locationName}.`
    }
    const currentTitle = titles[lang]
    console.log(currentTitle)
    return {
      postTitle: currentTitle,
      origin: travelNodes[0].locationName,
      destination: travelNodes[1].locationName,
      requirements: included,
    };
  } catch (error) {
    console.error('An error occurred while fetching visa requirements:', error);
    throw error;
  }
};


export async function load({params}) {
    return {
        tripInfo: await getVisaRequirements(params.lang ?? 'en' ,params.origin, params.destination)
    };
}

export const actions = {
  default: async () =>{
  }
};


