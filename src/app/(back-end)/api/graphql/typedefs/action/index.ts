export const action = `
	type Action {
		feedId: String

		likeUserId: [String]
		saveUserId: [String]

		createdAt: Date
		updatedAt: Date
	}

	type Follow {
		id: String
		userId: String
		followedUserId: String

		createdAt: Date
		updatedAt: Date

		user: User
		followedUser: User
	}

	type Mutation {
		like(input: IAction): Action
		save(input: IAction): Action
		follow(input: IAction): Follow
	}

`
