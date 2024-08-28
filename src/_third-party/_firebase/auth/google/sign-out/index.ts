import config from 'src/_third-party/_firebase/config'

export const signOut = async () => {
	try {
		await config.signOut()
	} catch (error) {
		//
	}
}
