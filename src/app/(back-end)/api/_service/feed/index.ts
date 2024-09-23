import { Feed } from '@prisma/client'

import { IDetail } from 'type/detail'
import type { Infinite } from 'type/infinite'
import type { IFeedInput } from 'type/input/feed'
import { prisma } from '../../_prisma'

const create = async (
	_: any,
	{ input }: { input: IFeedInput }
): Promise<void> => {
	await prisma.feed.create({ data: input })
}

const getFeeds = async (
	_: any,
	{ input }: { input: IQuery }
): Promise<Infinite<Feed>> => {
	const items = await prisma.feed.findMany({
		take: 3,
		where: input.lastId ? { id: { gt: input.lastId } } : undefined,
		orderBy: { createdAt: 'desc' }
	})

	return {
		hasNext: items.length === 10,
		items,
		lastId: items.at(-1)!.id
	}
}

const getFeedById = async (
	_: any,
	{ input }: { input: IDetail }
): Promise<Feed | null> => {
	const feed = await prisma.feed.findFirst({
		where: { id: input.id, isDeleted: false },
		include: { author: true }
	})

	console.log(feed)

	return feed!
}

export const feed = {
	create,
	getFeeds,
	getFeedById
}
