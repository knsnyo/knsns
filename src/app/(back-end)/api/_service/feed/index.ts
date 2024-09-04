import { Feed } from '@prisma/client'
import { NextResponse } from 'next/server'
import { Infinite } from 'src/__type/infinite'
import type { IFeedInput } from 'src/__type/input/feed'
import { prisma } from 'src/_third-party/prisma'

const create = async (
	_: any,
	{ input }: { input: IFeedInput }
): Promise<NextResponse> => {
	await prisma.feed.create({ data: input })

	return NextResponse.json({}, { status: 201 })
}

const getFeeds = async (): Promise<Infinite<Feed>> => {
	const items = await prisma.feed.findMany({
		take: 10,
		where: false ? { id: { gt: '' } } : undefined,
		orderBy: { createdAt: 'desc' }
	})

	return {
		hasNext: items.length === 10,
		items,
		lastId: items.at(-1)!.id
	}
}

const getFeedById = async (): Promise<Feed> => {
	const feed = await prisma.feed.findFirst()

	return feed!
}

export const feed = {
	create,
	getFeeds,
	getFeedById
}