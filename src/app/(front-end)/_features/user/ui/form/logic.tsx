import { User } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { IUserUpdateInput } from 'src/__type/input/user'
import Shared from 'src/app/(front-end)/__shared'
import { api } from 'src/app/(front-end)/_features/User/api'

const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/')!.at(-2)!
	const [user, setUser] = React.useState<User | null>(null)

	const isValid = user && user.uid && user.displayName

	React.useEffect(() => {
		;(async () => {
			const response = await api.get({ id })

			setUser(response?.user ?? null)
		})()
	}, [])

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
		const body: IUserUpdateInput = {
			uid: user!.uid,
			displayName: user!.displayName,
			tagname: user?.tagname || null,
			intro: user?.intro || null,
			link: user?.link || null,
			photoUrl: user?.photoUrl || null,
			backgroundImage: user?.backgroundImage || null
		}

		const result = await api.change(body)
		if (!result) return window.alert('retry this...')

		router.back()
	}

	return {
		value: { user, isValid },
		handler: { form: handleForm, submit, image: handleImage }
	}
}

export default useLogic
