import { useMutation } from '@apollo/client'
import type { IFeedInput } from 'type/input/feed'
import { query } from '../query'

export const useWrite = () => {
	const [change, { loading, error }] = useMutation(query.feed)

	const mutation = async (input: IFeedInput) => {
		await change({ variables: { input } })
	}

	return { loading, error, mutation }
}
