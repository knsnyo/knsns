import { useRouter } from 'next/navigation'
import React from 'react'
import { INDEX_MAP } from 'src/app/(front-end)/__shared/ui/bottom-navigation/constant'

const useLogic = () => {
	const router = useRouter()

	const updateIndex = (event: React.SyntheticEvent, newValue: number) => {
		switch (newValue) {
			case INDEX_MAP.home:
				return router.push('/')
			case INDEX_MAP.search:
				return
			case INDEX_MAP.my:
				return router.push(`/user/1`)
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
