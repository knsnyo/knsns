const feed = `
	type Feed {
		id: String
    authorId: String
    content: String
    createdAt: String
    updatedAt: String
	}

  input FeedInput {
    authorId: String
    content: String
  }

  type Query {
		feed: Feed
	}

	type Mutation {
		createFeed(input: FeedInput!): Feed
	}
`

export default feed
