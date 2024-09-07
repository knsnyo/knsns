import { User } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { api } from 'src/app/(front-end)/_features/User/api'

const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/')!.at(-2)!
	const [user, setUser] = React.useState<User | null>(null)

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

	return { value: { user }, handler: { form: handleForm } }
}

export default useLogic
