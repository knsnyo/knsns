import { Feed } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'src/app/(front-end)/__shared'
import { api } from 'src/app/(front-end)/_features/Write/api'

export const useLogic = (feed?: Feed) => {
	const router = useRouter()
	const uid = React.useContext(Shared.Provider.Session)

	const [content, setContent] = Shared.Hooks.useInput()

	const submit = async () => {
		const result = await api.create({ authorId: uid!, content })
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
