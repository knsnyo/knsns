import React from 'react'
import { FirebaseAuth } from 'third-party/_firebase/auth'
import type { TSession } from 'type/session'

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
