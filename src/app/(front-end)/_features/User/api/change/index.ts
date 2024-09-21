import type { IUserUpdateInput } from 'type/input/user'

const query = `
	mutation UpdateUser($input: UserUpdateInput!) {
		updateUser(input: $input) {
			uid
		}
	}
`

export const change = async (input: IUserUpdateInput) => {
	const response = await fetch('/api/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { input } })
	})

	return response.ok
}
