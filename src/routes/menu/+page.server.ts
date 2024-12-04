import type { PageServerLoad } from './$types'
import type {MenuItem} from "$lib/types/menu-item";


export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const  data: MenuItem[]  = await supabase.from('MenuItem').select('*')
	return { data }
}