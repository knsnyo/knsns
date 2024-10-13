import gql from 'graphql-tag'

export const query = {
	create: gql`
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
}
