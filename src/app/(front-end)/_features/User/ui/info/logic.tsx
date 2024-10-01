import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'
import { api } from '../../api'

const useLogic = () => {
	const router = useRouter()
	const id = usePathname().split('/').pop()!
	const session = React.useContext(Shared.Provider.Session)
	const isMy = id === 'my'

	const { data } = api.useGetUser(isMy ? session! : id)

	const go = () => {
		if (!isMy) return
		router.push(`/user/${session}/edit`)
	}

	return {
		value: { user: data?.user ?? null, isMy },
		handler: { go }
	}
}

export default useLogic
