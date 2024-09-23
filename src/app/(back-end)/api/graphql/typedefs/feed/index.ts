export const feed = `
	type Feed {
		id: String
    authorId: String
    content: String
    createdAt: String
    updatedAt: String
    image: String
    author: User
	}

  type InfiniteFeed {
    hasNext: Boolean!
    items: [Feed!]!
    lastId: String!
  }

  input FeedInput {
    authorId: String
    content: String
    image: String
  }

  type Query {
		feed(input: Detail!): Feed
    feeds: InfiniteFeed
	}

	type Mutation {
		createFeed(input: FeedInput!): Feed
	}
`
