import { Google } from './google'
import { Session } from './session'
import { onAuth } from './state'

export const FirebaseAuth = {
	Google,
	onAuth,
	Session
}

/**
 * https://dev.to/yutakusuno/nextjs14-firebase-authentication-with-google-sign-in-using-cookies-middleware-and-server-actions-48h4
 */
