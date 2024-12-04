import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit';
import type {MenuItem} from "$lib/types/menu-item";

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const response = await supabase.from('MenuItem').select('*')

	const menuItem = response.data.find(x => x.id == params.itemId)

	console.log(menuItem)

	if (!menuItem) {
		return error(404)
	}

	return menuItem
}