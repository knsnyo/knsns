import { FirebaseAuth } from 'third-party/_firebase/auth'
import { api } from '../../api'

export const useLogic = () => {
	const login = async () => {
		const user = await FirebaseAuth.Google.signIn()
		if (!user) return

		await FirebaseAuth.Session.create(user.uid)
		await api.create({
			uid: user.uid,
			displayName: user.displayName ?? 'RANDOM_NICKNAME',
			providerId: user.providerId,
			email: user?.email || null,
			photoUrl: user?.photoURL || null
		})

		// graphql 부르기
	}
	return {
		handler: { login }
	}
}
