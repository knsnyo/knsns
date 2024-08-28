import FirebaseAuth from 'src/_third-party/_firebase/auth'

export const useLogic = () => {
	const login = async () => {
		const uid = await FirebaseAuth.Google.signIn()
		if (!uid) return

		await FirebaseAuth.Session.create(uid)
	}
	return {
		handler: { login }
	}
}
