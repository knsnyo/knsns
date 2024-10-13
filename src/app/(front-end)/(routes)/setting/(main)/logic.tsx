import { useRouter } from 'next/navigation'
import { FirebaseAuth } from 'third-party/_firebase/auth'

export const useLogic = () => {
	const router = useRouter()

	const theme = () => router.push('/setting/theme')
	const logout = () => FirebaseAuth.Google.signOut()

	return {
		handler: {
			logout,
			nav: { theme }
		}
	}
}
