import React from 'react'
import FirebaseAuth from 'src/_third-party/_firebase/auth'
import { TSession } from 'src/_type/session'

const useUserSession = (session: TSession) => {
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

export default useUserSession
