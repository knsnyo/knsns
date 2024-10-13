import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { BOTTOM_NAV_URL, INDEX_MAP, URL_MAP } from './constant'

export const useLogic = () => {
	const pathname = usePathname()
	const [index, setIndex] = React.useState(URL_MAP[pathname as BOTTOM_NAV_URL])
	const router = useRouter()

	const updateIndex = (event: React.SyntheticEvent, newValue: number) => {
		setIndex(newValue)

		switch (newValue) {
			case INDEX_MAP.home:
				return router.push('/')
			case INDEX_MAP.search:
				return router.push('/search')
			case INDEX_MAP.my:
				return router.push(`/my`)
			default:
				break
		}
	}

	return {
		value: { index },
		handler: { index: updateIndex }
	}
}
