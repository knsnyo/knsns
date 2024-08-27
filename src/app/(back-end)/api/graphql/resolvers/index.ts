import service from 'src/app/(back-end)/api/_service'

const resolvers = {
	Query: {
		feed: service.feed.getFeedById,
		feeds: service.feed.getFeeds
	},
	Mutation: {
		createFeed: service.feed.create
	}
}

export default resolvers
