export const action = `
	type Action {
		feedId: String

		likeUserId: [String]
		saveUserId: [String]

		createdAt: Date
		updatedAt: Date
	}

	type Mutation {
		like(input: IAction): Action
		save(input: IAction): Action
	}

`
