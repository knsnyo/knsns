'use client'

import * as FirebaseAuth from 'firebase/auth'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import config from 'src/_firebase/config'

const withAuthRouting = <T extends object>(
	Component: React.ComponentType<T>
) => {
	const Container = (props: T) => {
		const pathname = usePathname()
		const router = useRouter()
		const [user, setUser] = React.useState<FirebaseAuth.User | null>(null)

		React.useEffect(() => {
			FirebaseAuth.onAuthStateChanged(config, (currentUser) => {
				setUser(currentUser)
			})
			if (user === null && pathname !== '/auth') {
				router.replace('/auth')
			}
			if (user && pathname === '/auth') {
				router.replace('/')
			}
		}, [user])

		return <Component {...props} />
	}

	return Container
}

export default withAuthRouting
