import { User as FirebaseUser } from 'firebase/auth'
import { prisma } from 'src/_third-party/prisma'

const create = async (_: any, { input }: { input: FirebaseUser }) => {
	try {
		const data = {
			uid: input.uid,
			displayName: input.displayName ?? 'RANDOM_DISPLAY_NAME',
			email: input.email,
			photoUrl: input.photoURL,
			providerId: input.providerId
		}

		await prisma.user.create({ data })
	} catch (error) {
		console.error(error)
	}
}

export const user = {
	create
}
