import { User } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import type { IUserUpdateInput } from 'type/input/user'
import { api } from '../../api'

export const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/')!.at(-2)!
	const { data } = api.useGetUser(id)

	const [user, setUser] = React.useState<User | null>(data?.user)

	const isValid = user && user.uid && user.displayName

	const { loading, error, mutation } = api.useChangeUser()

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
		const input: IUserUpdateInput = {
			uid: user!.uid,
			displayName: user!.displayName,
			tagname: user?.tagname || null,
			intro: user?.intro || null,
			link: user?.link || null,
			photoUrl: user?.photoUrl || null,
			backgroundImage: user?.backgroundImage || null
		}

		await mutation(input)
		if (error) return window.alert('retry this...')

		router.back()
	}

	return {
		value: { user, isValid, loading },
		handler: { form: handleForm, submit, image: handleImage }
	}
}
