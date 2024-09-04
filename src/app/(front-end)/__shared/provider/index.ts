import { AuthProvider } from 'src/app/(front-end)/__shared/provider/auth'
import { ApolloClientProvider } from 'src/app/(front-end)/__shared/provider/graphql'
import { ThemeProvider } from 'src/app/(front-end)/__shared/provider/theme'

export const Provider = {
	Graphql: ApolloClientProvider,
	Auth: AuthProvider,
	Theme: ThemeProvider
}
