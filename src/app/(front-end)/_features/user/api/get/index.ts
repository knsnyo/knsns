import gql from 'graphql-tag'

export const getUserGQL = gql`
	query GetUser($input: Detail!) {
		user(input: $input) {
			uid
			email
			displayName
			photoUrl

			backgroundImage
			tagname
			intro
			link

			createdAt
		}
	}
`
