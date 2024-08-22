import gql from 'graphql-tag'
import feed from './feed'

const typeDefs = gql`
	type Response {
		text: String
	}

	${feed}

	type Query {
		hello: Response
		feed: Feed
	}
`

export default typeDefs
