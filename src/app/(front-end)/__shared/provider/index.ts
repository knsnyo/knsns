import { AuthProvider } from 'src/app/(front-end)/__shared/provider/auth'
import { ApolloClientProvider } from 'src/app/(front-end)/__shared/provider/graphql'

export const Provider = {
	Graphql: ApolloClientProvider,
	Auth: AuthProvider
}
