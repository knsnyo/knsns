import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { config } from 'src/_third-party/_firebase/config'

export const signIn = async () => {
	const provider = new GoogleAuthProvider()
	provider.addScope('profile')
	provider.addScope('email')

	try {
		const result = await signInWithPopup(config, provider)

		if (!result || !result.user) {
			throw new Error('Google Sign In Failed')
		}

		return result.user
	} catch (error) {
		//
	}
}
