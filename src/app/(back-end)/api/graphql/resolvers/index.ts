import { Feed } from '@prisma/client'
import prisma from 'src/app/(back-end)/_config/prisma'

const resolvers = {
	Query: {
		hello: () => {
			return { text: 'bye' }
		},
		feed: async (): Promise<Feed | null> => {
			const feed = await prisma.feed.findFirst()

			return feed
		}
	}
}

export default resolvers
