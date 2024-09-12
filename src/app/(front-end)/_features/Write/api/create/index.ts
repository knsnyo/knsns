import type { IFeedInput } from 'type/input/feed'

const query = `
	mutation CreateFeed($input: FeedInput!) {
		createFeed(input: $input) {
			authorId
			content
			image
		}
	}
`

export const create = async (input: IFeedInput): Promise<boolean> => {
	const response = await fetch('/api/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { input } })
	})

	return response.ok
}
