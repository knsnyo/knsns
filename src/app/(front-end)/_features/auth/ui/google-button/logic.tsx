import { useMutation } from '@apollo/client'
import { FirebaseAuth } from 'third-party/_firebase/auth'
import { api } from '../../api'

export const useLogic = () => {
	const [change, value] = useMutation(api.createUserGQL)
	const login = async () => {
		const user = await FirebaseAuth.Google.signIn()
		if (!user) return

		await FirebaseAuth.Session.create(user.uid)
		const input = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoUrl: user.photoURL,
			providerId: user.providerId
		}

		change({ variables: { input } })

		while (value.loading) {
			console.log('loading ~')
		}
	}
	return {
		handler: { login }
	}
}
