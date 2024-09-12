import { AuthProvider, Session } from './auth'
import { ApolloClientProvider } from './graphql'
import { ThemeProvider } from './theme'

export const Provider = {
	Graphql: ApolloClientProvider,
	Auth: AuthProvider,
	Theme: ThemeProvider,
	Session
}
