import dotenv from 'dotenv'

import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from 'http'
import next from 'next'
import { WebSocketServer } from 'ws'
import { schema } from './graphql/schema'

dotenv.config()

const dev = true
const hostname = 'localhost'
const port = 7469

const app = next({ dev, hostname, port })
const handler = app.getRequestHandler()

const httpServer = createServer(handler)
const ws = new WebSocketServer({ server: httpServer, path: '/subscriptions' })
// eslint-disable-next-line react-hooks/rules-of-hooks
const serverCleanUp = useServer({ schema }, ws)
const apolloServer = new ApolloServer({
	schema,
	plugins: [
		ApolloServerPluginDrainHttpServer({ httpServer }),
		{
			async serverWillStart() {
				return {
					async drainServer() {
						await serverCleanUp.dispose()
					}
				}
			}
		}
	]
})

app.prepare().then(() => {
	apolloServer.start()
	httpServer.listen(7469, () => console.log(`http://${hostname}:${port}`))
})
