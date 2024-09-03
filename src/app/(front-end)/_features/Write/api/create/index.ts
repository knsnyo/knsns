import type { IFeedInput } from 'src/__type/input/feed'

const query = `
	mutation CreateFeed($input: FeedInput!) {
		createFeed(input: $input) {
			authorId
			content
		}
	}
`
const create = async (input: IFeedInput): Promise<boolean> => {
	const response = await fetch('/api/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { input } })
	})

	return response.ok
}

export default create
