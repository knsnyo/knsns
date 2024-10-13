import { useMutation } from '@apollo/client'
import { IAction } from 'type/action'
import { query } from '../query'

export const useLike = () => {
	const [change, { loading, error }] = useMutation(query.like)

	const mutation = async (input: IAction) => {
		await change({ variables: { input } })
	}

	return { loading, error, mutation }
}
