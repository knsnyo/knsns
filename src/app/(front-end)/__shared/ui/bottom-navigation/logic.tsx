import { useRouter } from 'next/navigation'
import React from 'react'
import { Session } from 'src/app/(front-end)/__shared/provider/auth'
import { INDEX_MAP } from 'src/app/(front-end)/__shared/ui/bottom-navigation/constant'

const useLogic = () => {
	const uid = React.useContext(Session)
	const router = useRouter()

	const updateIndex = (event: React.SyntheticEvent, newValue: number) => {
		switch (newValue) {
			case INDEX_MAP.home:
				return router.push('/')
			case INDEX_MAP.search:
				return
			case INDEX_MAP.my:
				return router.push(`/user/${uid}`)
			default:
				break
		}
	}

	return {
		handler: {
			index: updateIndex
		}
	}
}

export default useLogic
