import { useRouter } from 'next/navigation'

export const useLogic = () => {
	const router = useRouter()

	const back = () => {
		router.back()
	}

	return {
		handler: { back }
	}
}
