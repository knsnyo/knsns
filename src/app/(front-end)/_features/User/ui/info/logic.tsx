import { Action } from 'features'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import { api } from '../../api'

export const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/').pop()!
	const session = React.useContext(Shared.Provider.Session)!
	const isMy = id === 'my'

	const { data } = api.useGetUser(isMy ? session : id)

	const go = () => {
		if (!isMy) return
		router.push(`/user/${session}/edit`)
	}

	const navFollow = () => {
		return router.push(`/user/${id}/follow`)
	}

	const { mutation } = Action.api.useFollow()

	const follow = async () => {
		await mutation({ giveId: session, takeId: id })
	}

	return {
		value: { user: data?.user ?? null, isMy, my: session },
		handler: {
			follow,
			nav: { go, follow: navFollow }
		}
	}
}
