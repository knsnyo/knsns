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
		createdAt: Date

		follower: [Follow]
		followed: [Follow]
	}

	type InfiniteUser {
    hasNext: Boolean!
    items: [User!]!
  }

	type InfiniteFollowUser {
		hasNext: Boolean!
		items: [Follow!]!
	}

	input UserInput {
		uid: String!
		email: String 
		displayName: String!
		photoUrl: String
		providerId: String!
	}

	input UserUpdateInput {
		uid: String!
		displayName: String!
		tagname: String
		intro: String
		link: String
		photoUrl: String
		backgroundImage: String
	}

	type Mutation {
		createUser(input: UserInput!): User
		updateUser(input: UserUpdateInput!): User
	}
	
	type Query {
		user(input: IDetail!): User
		users(input: IQuery): InfiniteUser
		followUsers(input: IQuery): InfiniteFollowUser
	}
`
