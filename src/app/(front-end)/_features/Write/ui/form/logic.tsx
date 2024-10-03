import { Feed } from '@prisma/client'
import { User } from 'features'
import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import { IFeedInput } from 'type/input/feed'
import { api } from '../../api'

export const useLogic = (feed?: Feed) => {
	const router = useRouter()
	const uid = Shared.Hooks.useUid()
	const { data } = User.api.useGetUser(uid!)

	const [content, setContent] = Shared.Hooks.useInput()
	const [image, setImage] = React.useState<string>('')
	const { loading, error, mutation } = api.useWrite()

	const handleImage: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
		const name = await Shared.api.upload(e)

		if (!name) return

		setImage(name)
	}

	const submit = async () => {
		const input: IFeedInput = {
			authorId: uid!,
			content,
			image: image !== '' ? image : undefined
		}

		await mutation(input)
		if (error) return window.alert('retry this...')

		router.replace('/')
	}

	return {
		value: { content, image, user: data?.user },
		handler: {
			content: setContent,
			image: handleImage,
			submit
		}
	}
}
