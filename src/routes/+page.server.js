import { invalidate } from "$app/navigation"

export const actions = {
    default: async ({request}) =>{
        const formData = await request.formData()
        const origin = formData.get('origin')
        const destination = formData.get('destination')

        if ( origin == destination){
            return  invalid(400,{
                error: true,
                message: 'Origin has to be diferent than destination',
                origin,
                destination
            })
        }
    }
};