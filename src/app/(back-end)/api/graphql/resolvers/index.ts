import { Feed } from '@prisma/client'
import prisma from 'src/_third-party/prisma'
import service from 'src/app/(back-end)/api/_service'

const resolvers = {
	Query: {
		feed: async (): Promise<Feed | null> => {
			const feed = await prisma.feed.findFirst()

			return feed
		}
	},
	Mutation: {
		createFeed: service.feed.create
	}
}

export default resolvers
