import { IWriteBody } from 'src/app/(front-end)/_features/Write/api/type'

const create = async (body: IWriteBody) => {
	const response = await fetch(`/api/feed`, {
		method: 'POST',
		body: JSON.stringify(body)
	})
}

export default create
