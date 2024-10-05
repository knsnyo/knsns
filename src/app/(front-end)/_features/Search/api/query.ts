import gql from 'graphql-tag'

export const query = {
	getSearchRecentFeeds: gql`
		query GetSearchFeeds($input: IQuery) {
			feeds(input: $input) {
				hasNext
				items {
					id
					createdAt
					image
					content
					author {
						uid
						displayName
						tagname
						photoUrl
					}
					action {
						likeUserId
						saveUserId
					}
				}
			}
		}
	`,
	getSearchUsers: gql`
		query GetUsers($input: IQuery) {
			users(input: $input) {
				items {
					id
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
				hasNext
			}
		}
	`
}
