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
	const [uid, setUid] = React.useState<TSession>()
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		FirebaseAuth.onAuth((user) => {
			setUid(user?.uid)

			if (user && pathname === '/auth') {
				router.push('/')
			} else if (!user && pathname !== '/auth') {
				router.push('/auth')
			}
		})
	}, [uid])

	return <Session.Provider value={uid}>{props.children}</Session.Provider>
}
