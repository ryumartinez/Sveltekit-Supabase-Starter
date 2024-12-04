import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const  itemList  = await supabase.from('MenuItem').select('*')
	const item = itemList.find(x => x.id === params.itemId)

	if (!item) {
		return error(404)
	}

	return item
}