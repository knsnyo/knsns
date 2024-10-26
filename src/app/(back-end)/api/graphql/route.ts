/**
 * 2024.08.22
 * https://medium.com/@jareerzeenam/implementing-graphql-and-apollo-server-with-next-js-13-4-a-simple-guide-app-directory-77e38eb697e3
 * graphql setting
 */

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import { context } from './context'
import { schema } from './schema'

const apolloServer = new ApolloServer({ schema })

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, { context })
export { handler as GET, handler as POST }
