import { Feed } from '@prisma/client'

import { IDetail } from 'type/detail'
import type { Infinite } from 'type/infinite'
import type { IFeedInput } from 'type/input/feed'
import { IQuery } from 'type/query'
import Common from '../../../_common'
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
		where: Common.utils.generateWhere(input),
		orderBy: { createdAt: 'desc' },
		include: { author: true }
	})

	return {
		hasNext: items.length === take,
		items
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
