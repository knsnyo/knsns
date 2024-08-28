import { useRouter } from 'next/navigation'

export const useLogic = () => {
	const router = useRouter()

	const navigateWritePage = () => {
		router.push('/write')
	}

	return {
		handler: {
			navigate: navigateWritePage
		}
	}
}
