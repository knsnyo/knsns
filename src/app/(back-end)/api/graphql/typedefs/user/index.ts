export const user = `
	type User {
		id: String
		uid: String

		email: String
		displayName: String
		photoUrl: String
		providerId: String

		tagname: String
		intro: String
		link: String
		backgroundImage: String
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
	
	type Query {
		user(input: Detail!): User
	}
`
