/**
 * 2024.08.22
 * https://medium.com/@jareerzeenam/implementing-graphql-and-apollo-server-with-next-js-13-4-a-simple-guide-app-directory-77e38eb697e3
 * graphql setting
 */

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import context from 'src/app/(back-end)/api/graphql/context'
import resolvers from 'src/app/(back-end)/api/graphql/resolvers'
import typeDefs from 'src/app/(back-end)/api/graphql/typedefs'

const server = new ApolloServer({
	typeDefs,
	resolvers
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
	context
})

export { handler as GET, handler as POST }
