import { Feed } from '@prisma/client'

import { IDetail } from 'type/detail'
import type { Infinite } from 'type/infinite'
import type { IFeedInput } from 'type/input/feed'
import { IQuery } from 'type/query'
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
	const take = 3
	const items = await prisma.feed.findMany({
		take,
		where: input?.lastId ? { id: { lte: input.lastId } } : undefined,
		orderBy: { createdAt: 'desc' },
		include: { author: true }
	})

	return {
		hasNext: items.length === take,
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

	return feed!
}

export const feed = {
	create,
	getFeeds,
	getFeedById
}
