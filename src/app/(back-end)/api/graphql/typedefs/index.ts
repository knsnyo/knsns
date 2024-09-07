import gql from 'graphql-tag'
import { feed } from 'src/app/(back-end)/api/graphql/typedefs/feed'
import { user } from 'src/app/(back-end)/api/graphql/typedefs/user'

const typeDefs = gql`
	input Detail {
		id: String!
	}

	${feed}
	${user}
`

export default typeDefs
