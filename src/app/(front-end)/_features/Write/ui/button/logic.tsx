import { useRouter } from 'next/navigation'

const useLogic = () => {
	const router = useRouter()

	const navigateWritePage = () => {
		router.push('/write')
	}

	return {
		handler: {
			navigateWritePage
		}
	}
}

export default useLogic
