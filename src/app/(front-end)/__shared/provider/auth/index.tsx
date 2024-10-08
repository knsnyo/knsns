'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import type { TSession } from 'type/session'

export const Session: React.Context<TSession> = React.createContext(
	null as TSession
)

interface IProps extends React.PropsWithChildren {
	uid: TSession
}

export const AuthProvider: React.FC<IProps> = (props) => {
	const router = useRouter()
	const pathname = usePathname()

	React.useEffect(() => {
		if (props.uid && pathname === '/auth') {
			router.replace('/')
		} else if (!props.uid && pathname !== '/auth') {
			router.replace('/auth')
		}
	}, [])

	return <Session.Provider value={props.uid}>{props.children}</Session.Provider>
}
