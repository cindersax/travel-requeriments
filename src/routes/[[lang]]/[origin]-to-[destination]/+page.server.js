import { error, redirect } from '@sveltejs/kit';
import { removeKeys } from '../../../lib/utils/jsonHelpers';
/**
 * The base URL for the trips API.
 * @type {string}
 */
const URL_TRIPS_V3 = 'https://requirements-api.sandbox.joinsherpa.com/v3/trips?include=restriction,procedure';

/**
 * Sandbox Key, DO NOT USE IN PRODUCTION
 * @type {string}
 */
const API_KEY_TRIPS_V3 = 'AIzaSyAqD2UB9rjUl0A2jvh_xiiKsJowbc7-eM8';

/**
 * Builds the request body for the API call.
 * @param {string} lang - The language code.
 * @param {string} originCountry - The origin country code.
 * @param {string} destinationCountry - The destination country code.
 * @returns {string} The JSON stringified request body.
 */
const buildRequestBody = (lang, originCountry, destinationCountry) => {
	const requestBody = {
		data: {
			type: 'TRIP',
			attributes: {
				traveller: {
					passports: [originCountry]
				},
				locale: lang,
				travelNodes: [
					{
						type: 'ORIGIN',
						departure: {
							date: new Date(),
							time: '01:00',
							travelMode: 'AIR'
						},
						locationCode: originCountry
					},
					{
						type: 'DESTINATION',
						arrival: {
							date: new Date(),
							time: '23:00',
							travelMode: 'AIR'
						},
						locationCode: destinationCountry
					}
				]
			}
		}
	};

	return JSON.stringify(requestBody);
};

/**
 * Fetches the visa requirements from the API.
 * @param {string} lang - The language code.
 * @param {string} originCountry - The origin country code.
 * @param {string} destinationCountry - The destination country code.
 * @returns {Promise<object>} The response data and included data.
 * @throws {Error} If an error occurs while fetching the visa requirements.
 */
const fetchVisaRequirements = async (lang, originCountry, destinationCountry) => {
	try {
		const requestBody = buildRequestBody(lang, originCountry, destinationCountry);

		const response = await fetch(URL_TRIPS_V3, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/vnd.api+json',
				'x-api-key': API_KEY_TRIPS_V3
			},
			body: requestBody
		});

		if (!response.ok) {
			throw error('Trip not found');
		}

		const { data, included } = await response.json();

		return {
			data,
			included
		};
	} catch (error) {
		console.error('An error occurred while fetching visa requirements:', error);
		throw error;
	}
};

/**
 * Retrieves the visa titles based on the language and travel nodes.
 * @param {string} lang - The language code.
 * @param {object[]} travelNodes - The travel nodes data.
 * @returns {string} The visa title.
 */
const getVisaTitles = (lang, travelNodes) => {
	const titles = {
		en: `Travel requirements to ${travelNodes[1].locationName} from ${travelNodes[0].locationName}.`,
		es: `Requisitos de viaje a ${travelNodes[1].locationName} desde ${travelNodes[0].locationName}.`,
		de: `Reiseanforderungen nach ${travelNodes[1].locationName} von ${travelNodes[0].locationName}.`,
		fr: `Exigences de voyage vers ${travelNodes[1].locationName} depuis ${travelNodes[0].locationName}.`,
		pt: `Requisitos de viagem para ${travelNodes[1].locationName} a partir de ${travelNodes[0].locationName}.`
	};

	const currentTitle = titles[lang];

	return currentTitle;
};

/**
 * Processes the visa requirements by fetching data and generating the necessary information.
 * @param {string} lang - The language code.
 * @param {string} originCountry - The origin country code.
 * @param {string} destinationCountry - The destination country code.
 * @returns {Promise<object>} The processed visa requirements data.
 * @throws {Error} If an error occurs while fetching the visa requirements.
 */
const processVisaRequirements = async (lang, originCountry, destinationCountry) => {
	try {
		const { data, included } = await fetchVisaRequirements(lang, originCountry, destinationCountry);

		const { attributes } = data;
		const { travelNodes } = attributes;

		const postTitle = getVisaTitles(lang, travelNodes);

		return {
			postTitle,
			origin: travelNodes[0].locationName,
			destination: travelNodes[1].locationName,
			requirements: included
		};
	} catch (error) {
		console.error('An error occurred while fetching visa requirements:', error);
		throw error;
	}
};

/**
 * Loads the data for the page.
 * @param {object} context - The load context.
 * @param {object} context.params - The route parameters.
 * @param {string} context.params.lang - The language code.
 * @param {string} context.params.origin - The origin country code.
 * @param {string} context.params.destination - The destination country code.
 * @returns {Promise<object>} The loaded data.
 */
export async function load({ params }) {
	return {
		tripInfo: await processVisaRequirements(params.lang ?? 'en', params.origin, params.destination)
	};
}

/**
 * The actions for the page.
 * @type {object}
 */
export const actions = {
	default: async () => {}
};
