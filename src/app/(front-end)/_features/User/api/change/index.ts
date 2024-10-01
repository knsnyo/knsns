import { useMutation } from '@apollo/client'
import { IUserUpdateInput } from 'type/input/user'
import { query } from '../query'

export const useChangeUser = () => {
	const [change, { loading, error }] = useMutation(query.changeUser)

	const mutation = async (input: IUserUpdateInput) => {
		await change({
			variables: { input },
			refetchQueries: [
				{
					query: query.getUser,
					variables: { input: { id: input.uid } }
				}
			]
		})
	}

	return { loading, error, mutation }
}
