import React from 'react'
import type { TSession } from 'src/__type/session'
import { FirebaseAuth } from 'src/_third-party/_firebase/auth'

export const useUserSession = (session: TSession) => {
	const [uid, setUid] = React.useState<TSession>(session)

	React.useEffect(() => {
		const unsubscribe = FirebaseAuth.onAuth(async (user) => {
			setUid(user ? user.uid : null)
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return uid
}
