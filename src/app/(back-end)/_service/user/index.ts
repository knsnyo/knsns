import { User } from '@prisma/client'
import { User as FirebaseUser } from 'firebase/auth'
import { prisma } from 'prisma'

import type { IDetail } from 'type/detail'
import type { IUserUpdateInput } from 'type/input/user'

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

const get = async (
	_: any,
	{ input }: { input: IDetail }
): Promise<User | null> => {
	const data = await prisma.user.findUnique({ where: { uid: input.id } })

	return data
}

const update = async (
	_: any,
	{ input }: { input: IUserUpdateInput }
): Promise<void> => {
	await prisma.user.update({ where: { uid: input.uid }, data: input })
}

export const user = {
	create,
	get,
	update
}
