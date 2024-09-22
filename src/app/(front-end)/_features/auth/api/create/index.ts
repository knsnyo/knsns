import gql from 'graphql-tag'

export const createUserGQL = gql`
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
