export const common = `
	input IDetail {
		id: String!
	}

	input IAction {
		takeId: String!
		giveId: String!
	}
	
	input IQuery {
		lastId: String
		
		authorId: String
		userId: String

		likeId: String
		saveId: String

		followerId: String
		followingId: String

		keyword: String
		nickname: String
	}

	scalar Date
`
