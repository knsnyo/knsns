import Google from 'src/_third-party/_firebase/auth/google'
import Session from 'src/_third-party/_firebase/auth/session'
import onAuth from 'src/_third-party/_firebase/auth/state'

const FirebaseAuth = {
	Google,
	onAuth,
	Session
}

export default FirebaseAuth

/**
 * https://dev.to/yutakusuno/nextjs14-firebase-authentication-with-google-sign-in-using-cookies-middleware-and-server-actions-48h4
 */
