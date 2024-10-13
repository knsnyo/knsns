import { useMutation } from '@apollo/client'
import { IUserInput } from 'type/input/user'
import { query } from '../query'

export const useLogin = () => {
	const [change, { loading, error }] = useMutation(query.create)

	const mutation = async (input: IUserInput) => {
		await change({ variables: { input } })
	}

	return { loading, error, mutation }
}
