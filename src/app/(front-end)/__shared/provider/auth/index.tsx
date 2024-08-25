/**
 * 2024.08.25
 * https://ko.react.dev/reference/react/useContext
 */

'use client'

import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import config from 'src/_third-party/_firebase/config'
import {
	TAuth,
	TContext
} from 'src/app/(front-end)/__shared/provider/auth/type'

const INIT_CONTEXT: TContext = {
	user: null
}

export const AuthContext = React.createContext(INIT_CONTEXT)

const AuthProvider: React.FC<React.PropsWithChildren> = (props) => {
	const [user, setUser] = React.useState<TAuth>(null)

	React.useEffect(() => {
		onAuthStateChanged(config, (currentUser) => {
			setUser(currentUser)
			console.log(currentUser)
		})

		console.log('auth-provider', user)
	}, [user])

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<AuthContext.Provider value={{ user }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
