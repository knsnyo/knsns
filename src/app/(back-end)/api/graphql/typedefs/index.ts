import gql from 'graphql-tag'
import feed from './feed'

const typeDefs = gql`
	${feed}
`

export default typeDefs
