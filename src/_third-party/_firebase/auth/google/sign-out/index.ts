import { config } from '../../../config'

export const signOut = async () => {
	try {
		await config.signOut()
	} catch (error) {
		//
	}
}
