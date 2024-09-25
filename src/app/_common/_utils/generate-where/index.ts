import { IQuery } from 'type/query'

export const generateWhere = (query?: IQuery) => {
	const where = {
		...(query?.lastId ? { id: { lt: query.lastId } } : {}),
		...(query?.userId ? { userId: query.userId } : {}),
		...(query?.authorId ? { authorId: query.authorId } : {})
	}
	return where
}
