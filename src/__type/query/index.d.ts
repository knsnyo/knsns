export interface IQuery {
	lastId?: string

	// feed
	userId?: string
	authorId?: string

	// feed
	likeId?: string
	saveId?: string

	// user
	followerId?: string
	followingId?: string

	// search
	keyword?: string
	nickname?: string
}
