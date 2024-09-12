import { User } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { api } from '../../api'

const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/').pop()!
	const [user, setUser] = React.useState<User | null>(null)

	const go = () => {
		router.push(`/user/${id}/edit`)
	}

	React.useEffect(() => {
		;(async () => {
			const response = await api.get({ id })

			setUser(response?.user ?? null)
		})()
	}, [])

	return { value: { user }, handler: { go } }
}

export default useLogic
