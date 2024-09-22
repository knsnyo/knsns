import gql from 'graphql-tag'

export const changeUserGQL = gql`
	mutation UpdateUser($input: UserUpdateInput!) {
		updateUser(input: $input) {
			uid
		}
	}
`
