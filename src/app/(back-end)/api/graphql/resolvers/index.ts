import { service } from 'service'

export const resolvers = {
	Query: {
		feed: service.feed.getFeedById,
		feeds: service.feed.getFeeds,
		user: service.user.getUser,
		users: service.user.getUsers,
		followUsers: service.user.followUsers
	},
	Mutation: {
		createFeed: service.feed.create,
		createUser: service.user.create,
		updateUser: service.user.update,
		like: service.action.like,
		save: service.action.save,
		follow: service.action.follow
	}
}
