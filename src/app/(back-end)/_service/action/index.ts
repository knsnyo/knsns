import { IAction } from 'type/action'
import { prisma } from '../../_prisma'

const like = async (_: any, { input }: { input: IAction }) => {
	let check = await prisma.action.findFirst({
		where: { feedId: input.takeId }
	})

	if (!check) {
		check = await prisma.action.create({
			data: { feedId: input.takeId }
		})
	}

	const index = check?.likeUserId?.indexOf(input.giveId) ?? -1
	const likeUserId = Array.from(check?.likeUserId ?? [])

	if (index === -1) {
		likeUserId.push(input.giveId)
	} else {
		likeUserId.splice(index, 1)
	}

	await prisma.action.update({
		where: { feedId: input.takeId },
		data: { likeUserId }
	})
}

const save = async (_: any, { input }: { input: IAction }) => {
	let check = await prisma.action.findFirst({
		where: { feedId: input.takeId }
	})

	if (!check) {
		check = await prisma.action.create({
			data: { feedId: input.takeId }
		})
	}

	const index = check?.saveUserId?.indexOf(input.giveId) ?? -1
	const saveUserId = Array.from(check?.saveUserId ?? [])

	if (index === -1) {
		saveUserId.push(input.giveId)
	} else {
		saveUserId.splice(index, 1)
	}

	await prisma.action.update({
		where: { feedId: input.takeId },
		data: { saveUserId }
	})
}

const follow = async (_: any, { input }: { input: IAction }) => {
	let check = await prisma.follow.findFirst({
		where: { userId: input.takeId, followedUserId: input.giveId }
	})

	if (!check) {
		check = await prisma.follow.create({
			data: { userId: input.takeId, followedUserId: input.giveId }
		})
		return
	}

	await prisma.follow.updateMany({
		where: { userId: input.takeId, followedUserId: input.giveId },
		data: { isDeleted: !check.isDeleted }
	})
}

export const action = { like, save, follow }
