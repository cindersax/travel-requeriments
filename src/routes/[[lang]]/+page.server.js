import { error } from '@sveltejs/kit';
import { context } from './static/context.js';

export async function load({ params }) {
	if (params.lang != 'en' && params.lang != 'es' && params.lang) {
		throw error(404, 'not found');
	}
	return {
		lang: params.lang ?? 'en',
		context: context[params.lang ?? 'en']
	};
}
