const feed = `
	type Feed {
		id: String
    authorId: String
    content: String
    createdAt: String
    updatedAt: String
	}

  type InfiniteFeed {
    hasNext: Boolean!
    items: [Feed!]!
    lastId: String!
  }

  input FeedInput {
    authorId: String
    content: String
  }

  type Query {
		feed: Feed
    feeds: InfiniteFeed
	}

	type Mutation {
		createFeed(input: FeedInput!): Feed
	}
`

export default feed
