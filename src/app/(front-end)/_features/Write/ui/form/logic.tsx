import { Feed } from '@prisma/client'
import Shared from 'src/app/(front-end)/__shared'
import create from 'src/app/(front-end)/_features/Write/api/create'

const useLogic = (feed?: Feed) => {
	const [content, setContent] = Shared.Hooks.useInput()

	const submit = async () => {
		const { uid } = JSON.parse(localStorage.getItem('knsns-user')!)

		await create({ authorId: uid, content })
	}

	return {
		value: { content },
		handler: {
			content: setContent,
			submit
		}
	}
}

export default useLogic
