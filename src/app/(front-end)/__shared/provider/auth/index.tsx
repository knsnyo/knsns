'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FirebaseAuth } from 'third-party/_firebase/auth'
import { TSession } from 'type/session'

export const Session: React.Context<TSession> = React.createContext(
	undefined as TSession
)

interface IProps extends React.PropsWithChildren {}

export const AuthProvider: React.FC<IProps> = (props) => {
	const uid = React.useRef<TSession>()
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		FirebaseAuth.onAuth((user) => {
			uid.current = user?.uid

			if (user && pathname === '/auth') {
				router.push('/')
			} else if (!user && pathname !== '/auth') {
				router.push('/auth')
			}
		})
	}, [])

	return (
		<Session.Provider value={uid.current}>{props.children}</Session.Provider>
	)
}
