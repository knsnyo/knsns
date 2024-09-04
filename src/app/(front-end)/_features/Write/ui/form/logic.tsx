import { Feed } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Shared from 'src/app/(front-end)/__shared'
import { api } from 'src/app/(front-end)/_features/Write/api'

export const useLogic = (feed?: Feed) => {
	const router = useRouter()

	const [content, setContent] = Shared.Hooks.useInput()

	const submit = async () => {
		const { uid } = JSON.parse(localStorage.getItem('knsns-user')!)

		const result = await api.create({ authorId: uid, content })
		if (!result) return window.alert('retry this...')

		router.replace('/')
	}

	return {
		value: { content },
		handler: {
			content: setContent,
			submit
		}
	}
}
