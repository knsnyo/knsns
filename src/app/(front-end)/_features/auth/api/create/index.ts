import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { IUserInput } from 'type/input/user'

const query = gql`
	mutation CreateUser($input: UserInput!) {
		createUser(input: $input) {
			uid
			email
			displayName
			photoUrl
			providerId
		}
	}
`

export const useLogin = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = (input: IUserInput) => {
		change({ variables: { input } })
	}

	return { loading, error, mutation }
}
