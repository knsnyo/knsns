import prisma from 'src/_third-party/prisma'
import { FeedInput } from 'src/_type/input/feed'

const create = async (_: any, args: { input: FeedInput }) => {
	await prisma.feed.create({ data: args.input })

	return Response.json({}, { status: 201 })
}

const feed = {
	create
}

export default feed
