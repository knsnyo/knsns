import { User } from 'firebase/auth'

export type TOnAuthCallback = (authUser: User | null) => void
