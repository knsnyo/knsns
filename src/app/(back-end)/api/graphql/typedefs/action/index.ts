export const action = `
	type Action {
		feedId: String
		likeUserId: [String]
		createdAt: Date
		updatedAt: Date
	}

	type Mutation {
		like(input: IAction): Action
	}

	type Subscription {
    actionUpdated(feedId: String!): Action
  }
`
