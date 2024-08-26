import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import config from 'src/_third-party/_firebase/config'

const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider()
	try {
		const result = await signInWithPopup(config, provider)

		if (!result || !result.user) {
			throw new Error('Google Sign In Failed')
		}

		return result.user.uid
	} catch (error) {
		//
	}
}

export default signInWithGoogle
