import prisma from 'src/app/(back-end)/_config/prisma'

export const POST = async (request: Request) => {
	const body = await request.json()

	await prisma.feed.create({ data: body })

	return Response.json({}, { status: 201 })
}
