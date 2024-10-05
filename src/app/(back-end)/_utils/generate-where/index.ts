import { IQuery } from 'type/query'

export const generateWhere = (query?: IQuery) => {
	const where = {
		...(query?.lastId ? { id: { lt: query.lastId } } : {}),
		...(query?.userId ? { userId: query.userId } : {}),
		...(query?.authorId ? { authorId: query.authorId } : {}),
		...(query?.likeId ? { action: { likeUserId: { has: query.likeId } } } : {}),
		...(query?.saveId ? { action: { saveUserId: { has: query.saveId } } } : {}),
		...(query?.followerId ? { followedUserId: query.followerId } : {}),
		...(query?.followingId ? { userId: query.followingId } : {}),
		...(query?.keyword
			? {
					OR: [
						{ author: { displayName: { contains: query?.keyword } } },
						{ content: { contains: query?.keyword } }
					]
				}
			: {}),
		...(query?.nickname ? { displayName: { contains: query.nickname } } : {})
	}
	return where
}
