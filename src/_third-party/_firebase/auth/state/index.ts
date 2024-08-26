import { onAuthStateChanged } from 'firebase/auth'
import { TOnAuthCallback } from 'src/_third-party/_firebase/auth/state/type'
import config from 'src/_third-party/_firebase/config'

const onAuth = (callback: TOnAuthCallback) => {
	return onAuthStateChanged(config, callback)
}

export default onAuth
