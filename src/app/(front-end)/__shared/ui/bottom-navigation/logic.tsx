import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Session } from 'src/app/(front-end)/__shared/provider/auth'
import {
	BOTTOM_NAV_URL,
	INDEX_MAP,
	URL_MAP
} from 'src/app/(front-end)/__shared/ui/bottom-navigation/constant'

const useLogic = () => {
	const pathname = usePathname()
	const [index, setIndex] = React.useState(URL_MAP[pathname as BOTTOM_NAV_URL])
	const uid = React.useContext(Session)
	const router = useRouter()

	const updateIndex = (event: React.SyntheticEvent, newValue: number) => {
		setIndex(newValue)

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
		value: { index },
		handler: { index: updateIndex }
	}
}

export default useLogic
