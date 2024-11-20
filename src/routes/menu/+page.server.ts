import type { PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const  data  = await supabase.from('Vehicle').select('*')
	return data
}