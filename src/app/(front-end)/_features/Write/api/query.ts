import gql from 'graphql-tag'

export const query = {
	feed: gql`
		mutation CreateFeed($input: FeedInput!) {
			createFeed(input: $input) {
				authorId
				content
				image
			}
		}
	`
}
