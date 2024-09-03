import type { IUserInput } from 'src/__type/input/user'

const query = `
	mutation CreateUser($input: UserInput!) {
		createUser(input: $input) {
			uid
			email
			displayName
			photoUrl
			providerId
		}
	}
`

export const create = async (input: IUserInput) => {
	await fetch('/api/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { input } })
	}).catch((error) => {
		console.log(error)
	})
}
