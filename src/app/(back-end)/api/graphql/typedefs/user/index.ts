export const user = `
	type User {
		id: String
		uid: String
		email: String
		displayName: String
		photoUrl: String
		providerId: String
	}

	input UserInput {
		uid: String!
		email: String 
		displayName: String!
		photoUrl: String
		providerId: String!
	}

	type Mutation {
		createUser(input: UserInput!): User
	}
`
