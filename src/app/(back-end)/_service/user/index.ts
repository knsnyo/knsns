import { Prisma, User } from '@prisma/client'
import { User as FirebaseUser } from 'firebase/auth'

import { TFollowWithUser } from 'type/convolution'
import type { IDetail } from 'type/detail'
import { Infinite } from 'type/infinite'
import type { IUserUpdateInput } from 'type/input/user'
import { IQuery } from 'type/query'
import { prisma } from '../../_prisma'
import { utils } from '../../_utils'

const getUser = async (
	_: any,
	{ input }: { input: IDetail }
): Promise<User | null> => {
	const data = await prisma.user.findUnique({
		where: { uid: input.id },
		include: { followed: true, follower: true }
	})

	return data
}

const getUsers = async (
	_: any,
	{ input }: { input: IQuery }
): Promise<Infinite<User>> => {
	const take = 3

	const items = await prisma.user.findMany({
		take,
		orderBy: { displayName: 'desc' },
		include: { followed: true, follower: true },
		where: utils.generateWhere(input) as Prisma.UserWhereInput
	})

	return {
		hasNext: items.length === take,
		items
	}
}

const followUsers = async (
	_: any,
	{ input }: { input: IQuery }
): Promise<Infinite<TFollowWithUser>> => {
	const take = 3

	const items = await prisma.follow.findMany({
		take,
		orderBy: { createdAt: 'desc' },
		include: {
			user: input?.followerId ? true : undefined,
			followedUser: input.followingId ? true : undefined
		},
		where: utils.generateWhere(input) as Prisma.FollowWhereInput
	})

	return {
		hasNext: items.length === take,
		items
	}
}

const create = async (
	_: any,
	{ input }: { input: FirebaseUser }
): Promise<void> => {
	try {
		const data = {
			uid: input.uid,
			displayName: input.displayName ?? 'RANDOM_DISPLAY_NAME',
			email: input.email,
			photoUrl: input.photoURL,
			providerId: input.providerId,
			tagname: input.displayName
		}

		await prisma.user.create({ data })
	} catch (error) {
		//
	}
}

const update = async (
	_: any,
	{ input }: { input: IUserUpdateInput }
): Promise<void> => {
	await prisma.user.update({ where: { uid: input.uid }, data: input })
}

export const user = {
	create,
	update,
	getUser,
	getUsers,
	followUsers
}
