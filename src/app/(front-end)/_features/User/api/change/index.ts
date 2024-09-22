import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { IUserUpdateInput } from 'type/input/user'

const query = gql`
	mutation UpdateUser($input: UserUpdateInput!) {
		updateUser(input: $input) {
			uid
		}
	}
`

export const useChangeUser = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = (input: IUserUpdateInput) => {
		change({ variables: { input } })
	}

	return { loading, error, mutation }
}
