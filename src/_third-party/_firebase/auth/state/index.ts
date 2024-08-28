import { onAuthStateChanged } from 'firebase/auth'
import { TOnAuthCallback } from 'src/_third-party/_firebase/auth/state/type'
import config from 'src/_third-party/_firebase/config'

export const onAuth = (callback: TOnAuthCallback) => {
	return onAuthStateChanged(config, callback)
}
