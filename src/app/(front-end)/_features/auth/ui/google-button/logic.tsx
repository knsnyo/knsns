import * as FirebaseAuth from 'firebase/auth'
import config from 'src/_third-party/_firebase/config'

const useLogic = () => {
	const login = async () => {
		const provider = new FirebaseAuth.GoogleAuthProvider()
		try {
			await FirebaseAuth.signInWithRedirect(config, provider)
		} catch (error) {
			//
		}
	}

	return {
		handler: { login }
	}
}

export default useLogic
