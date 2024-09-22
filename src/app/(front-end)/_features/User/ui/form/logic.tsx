import { useMutation } from '@apollo/client'
import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { User } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import type { IUserUpdateInput } from 'type/input/user'
import Shared from '../../../../__shared'
import { api } from '../../api'

const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/')!.at(-2)!
	const { data } = useQuery(api.getUserGQL, {
		variables: { input: { id } }
	})

	const [user, setUser] = React.useState<User | null>(data?.user)

	const isValid = user && user.uid && user.displayName

	const body: IUserUpdateInput = {
		uid: user!.uid,
		displayName: user!.displayName,
		tagname: user?.tagname || null,
		intro: user?.intro || null,
		link: user?.link || null,
		photoUrl: user?.photoUrl || null,
		backgroundImage: user?.backgroundImage || null
	}

	const [change, value] = useMutation(api.changeUserGQL, {
		variables: { input: body }
	})

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser((prev) => {
			if (!prev) return prev

			return {
				...prev,
				[e.target.name]: e.target.value
			}
		})
	}

	const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = await Shared.api.upload(e)

		if (!name) return
		setUser((prev) => {
			if (!prev) return prev

			return {
				...prev,
				[e.target.name as 'photoUrl' | 'backgroundImage']: name
			}
		})
	}

	const submit = async () => {
		change()
		while (value.loading);
		if (value.error) return window.alert('retry this...')

		router.back()
	}
	console.log(value)

	return {
		value: { user, isValid },
		handler: { form: handleForm, submit, image: handleImage }
	}
}

export default useLogic
