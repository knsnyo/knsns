import { service } from '../../../_service'

export const resolvers = {
	Query: {
		feed: service.feed.getFeedById,
		feeds: service.feed.getFeeds,
		user: service.user.get
	},
	Mutation: {
		createFeed: service.feed.create,
		createUser: service.user.create,
		updateUser: service.user.update,
		like: service.action.like,
		save: service.action.save
	}
}
