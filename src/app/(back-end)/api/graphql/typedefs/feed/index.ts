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
  }

  input FeedInput {
    authorId: String
    content: String
    image: String
  }

  type Query {
		feed(input: Detail!): Feed
    feeds(input: IQuery): InfiniteFeed
	}

	type Mutation {
		createFeed(input: FeedInput!): Feed
	}
`
