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

	const index = check.likeUserId.indexOf(input.giveId)
	const likeUserId = Array.from(check.likeUserId)

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

export const action = { like }
