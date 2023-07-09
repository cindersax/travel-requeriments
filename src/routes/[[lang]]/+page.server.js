import {error} from "@sveltejs/kit"
const  context = {
	en: {
		title: 'Unlock the World: Simplifying Travel Requirements for Your Next Adventure',
		description: 'Enter Your Origin and Destination Below to Access Essential Travel Information',
		originLabel: 'Place of origin?',
		destinationLabel: 'Where do you go?',
		btnText: 'Explore Now'
	},
	es: {
		title: 'Descubre el mundo: Simplifica los requisitos de viaje para tu próxima aventura',
		description:
			'Ingresa tu lugar de origen y destino a continuación para acceder a información de viaje esencial',
		originLabel: '¿De dónde eres?',
		destinationLabel: '¿A dónde vas?',
		btnText: 'Explorar ahora'
	}
};



export async function load({params}) {
   
    if(params.lang != 'en' && params.lang != 'es' && params.lang ){
        throw error(404, 'not found')
    }
    return {
        lang : params.lang ?? 'en',
        context: context[params.lang ?? 'en']
    };
}
