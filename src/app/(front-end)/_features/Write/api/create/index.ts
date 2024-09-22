import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import type { IFeedInput } from 'type/input/feed'

const query = gql`
	mutation CreateFeed($input: FeedInput!) {
		createFeed(input: $input) {
			authorId
			content
			image
		}
	}
`

export const useWrite = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = (input: IFeedInput) => {
		change({ variables: { input } })
	}

	return { loading, error, mutation }
}
