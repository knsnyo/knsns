export const action = `
	type Action {
		feedId: String

		likeUserId: [String]
		saveUserId: [String]

		createdAt: Date
		updatedAt: Date
	}

	type Follow {
		userId: String
		followedUserId: String

		createdAt: Date
		updatedAt: Date
	}

	type Mutation {
		like(input: IAction): Action
		save(input: IAction): Action
		follow(input: IAction): Follow
	}

`
