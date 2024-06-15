import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import config from 'src/_firebase/config'

const useLogic = () => {
	const login = async () => {
		const provider = new GoogleAuthProvider()
		try {
			const { user } = await signInWithPopup(config, provider)
			// session?
		} catch (error) {
			//
		}
	}

	return {
		handler: { login }
	}
}

export default useLogic
