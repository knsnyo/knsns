import { AuthProvider } from './auth'
import { ApolloClientProvider } from './graphql'
import { ThemeContext, ThemeProvider } from './theme'

export const Provider = {
	Graphql: ApolloClientProvider,
	Theme: ThemeProvider,
	ThemeContext,
	Auth: AuthProvider
}
