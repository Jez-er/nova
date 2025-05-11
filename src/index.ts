import { FetchMethods } from './types/fetch.types.js'

class nova {
	async fetch(endpoint: string, method: FetchMethods) {
		const data = await fetch(endpoint, { method: method })

		return data
	}
}

export default nova
