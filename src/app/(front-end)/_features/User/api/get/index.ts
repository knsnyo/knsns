import type { IDetail } from 'type/detail'

const query = `
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

export const get = async (input: IDetail) => {
	const response = await fetch('/api/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { input } })
	})

	const json = await response.json()

	return json.data
}
