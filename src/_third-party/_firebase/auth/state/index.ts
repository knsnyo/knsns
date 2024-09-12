import { onAuthStateChanged } from 'firebase/auth'
import { config } from '../../config'
import type { TOnAuthCallback } from './type'

export const onAuth = (callback: TOnAuthCallback) => {
	return onAuthStateChanged(config, callback)
}
