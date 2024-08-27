'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import type { TSession } from 'src/_type/session'

const Session = React.createContext(null as TSession)

interface IProps extends React.PropsWithChildren {
	uid: TSession
}

const AuthProvider: React.FC<IProps> = (props) => {
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

export default AuthProvider
