import { FirebaseAuth } from 'third-party/_firebase/auth'
import { IUserInput } from 'type/input/user'
import { api } from '../../api'

export const useLogic = () => {
	const { mutation } = api.useLogin()
	const login = async () => {
		const user = await FirebaseAuth.Google.signIn()
		if (!user) return

		const input: IUserInput = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName!,
			photoUrl: user.photoURL,
			providerId: user.providerId
		}

		await mutation(input)
	}
	return {
		handler: { login }
	}
}
