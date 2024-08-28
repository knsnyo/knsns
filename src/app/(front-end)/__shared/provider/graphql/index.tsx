'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: `http://localhost:7469/api/graphql`,
	cache: new InMemoryCache(),
	connectToDevTools: true
})

export const ApolloClientProvider: React.FC<React.PropsWithChildren> = (
	props
) => {
	return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
