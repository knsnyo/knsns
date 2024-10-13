import { useRouter } from 'next/navigation'

export const useLogic = () => {
	const router = useRouter()

	const back = () => router.back()
	const setting = () => router.push('/setting')

	return {
		handler: { back, setting }
	}
}
