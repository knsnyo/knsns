import { useRouter } from 'next/navigation'

const useLogic = () => {
	const router = useRouter()

	const back = () => {
		router.back()
	}

	return {
		handler: { back }
	}
}

export default useLogic
