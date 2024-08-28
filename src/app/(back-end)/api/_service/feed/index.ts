import { Feed } from '@prisma/client'
import { NextResponse } from 'next/server'
import { prisma } from 'src/_third-party/prisma'
import { Infinite } from 'src/_type/infinite'
import type { IFeedInput } from 'src/_type/input/feed'

const create = async (
	_: any,
	args: { input: IFeedInput }
): Promise<NextResponse> => {
	await prisma.feed.create({ data: args.input })

	return NextResponse.json({}, { status: 201 })
}

const getFeeds = async (): Promise<Infinite<Feed>> => {
	const items = await prisma.feed.findMany({ take: 10 })

	return {
		hasNext: false,
		items,
		lastId: items.at(-1)!.id
	}
}

const getFeedById = async (): Promise<Feed> => {
	const feed = await prisma.feed.findFirst()

	return feed!
}

const feed = {
	create,
	getFeeds,
	getFeedById
}

export default feed
