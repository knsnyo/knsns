import gql from 'graphql-tag'

export const query = {
	feed: gql`
		query GetFeedById($input: IDetail!) {
			feed(input: $input) {
				image
				content
				createdAt
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
	`,
	feeds: gql`
		query GetFeeds($input: IQuery) {
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
	`
}
