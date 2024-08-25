'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { AuthContext } from 'src/app/(front-end)/__shared/provider/auth'

const withAuthRouting = <T extends object>(
	Component: React.ComponentType<T>
) => {
	const Container = (props: T) => {
		const pathname = usePathname()
		const router = useRouter()

		const { user } = React.useContext(AuthContext)

		React.useEffect(() => {
			if (user === null && pathname !== '/auth') {
				router.replace('/auth')
			}
			if (user && pathname === '/auth') {
				router.replace('/')
			}

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [user])

		return <Component {...props} />
	}

	return Container
}

export default withAuthRouting
