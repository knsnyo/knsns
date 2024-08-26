import config from 'src/_third-party/_firebase/config'

const signOutWithGoogle = async () => {
	try {
		await config.signOut()
	} catch (error) {
		//
	}
}

export default signOutWithGoogle
