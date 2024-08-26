import AuthProvider from 'src/app/(front-end)/__shared/provider/auth'
import ApolloClientProvider from 'src/app/(front-end)/__shared/provider/graphql'

const Provider = {
	Graphql: ApolloClientProvider,
	Auth: AuthProvider
}

export default Provider
