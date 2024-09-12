import gql from 'graphql-tag'
import { common } from './common'
import { feed } from './feed'
import { user } from './user'

const typeDefs = gql`
	${common}
	${feed}
	${user}
`

export default typeDefs
