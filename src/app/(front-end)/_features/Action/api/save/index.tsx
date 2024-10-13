import { useMutation } from '@apollo/client'
import { IAction } from 'type/action'
import { query } from '../query'

export const useSave = () => {
	const [change, { loading, error }] = useMutation(query.save)

	const mutation = async (input: IAction) => {
		await change({ variables: { input } })
	}

	return { loading, error, mutation }
}
