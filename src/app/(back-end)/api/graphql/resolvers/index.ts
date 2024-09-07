import { service } from 'src/app/(back-end)/api/_service'

export const resolvers = {
	Query: {
		feed: service.feed.getFeedById,
		feeds: service.feed.getFeeds,
		user: service.user.get
	},
	Mutation: {
		createFeed: service.feed.create,
		createUser: service.user.create
	}
}
