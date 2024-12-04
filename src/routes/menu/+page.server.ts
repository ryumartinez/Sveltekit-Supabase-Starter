import type { PageServerLoad } from './$types'
import type {MenuItem} from "$lib/types/menu-item";


export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const  response  = await supabase.from('MenuItem').select('*')
	const menuItemList = response.data as MenuItem[]
	return menuItemList
}