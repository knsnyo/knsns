import { create, remove } from 'src/_third-party/_firebase/auth/session/action'
import { key } from 'src/_third-party/_firebase/auth/session/key'

const Session = { create, remove, key }

export default Session
