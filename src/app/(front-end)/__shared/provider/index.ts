import { AuthProvider } from './auth'
import { ApolloClientProvider } from './graphql'
import { ThemeProvider } from './theme'

export const Provider = {
	Graphql: ApolloClientProvider,
	Theme: ThemeProvider,
	Auth: AuthProvider
}
