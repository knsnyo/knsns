import gql from 'graphql-tag'

export const query = {
	getUser: gql`
		query GetUser($input: IDetail!) {
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

				follower {
					followedUserId
				}

				followed {
					userId
				}
			}
		}
	`,
	changeUser: gql`
		mutation UpdateUser($input: UserUpdateInput!) {
			updateUser(input: $input) {
				uid
			}
		}
	`
}
