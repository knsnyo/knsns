import gql from 'graphql-tag'
import { common } from './_common'
import { action } from './action'
import { feed } from './feed'
import { user } from './user'

const typeDefs = gql`
	${common}
	${action}
	${feed}
	${user}
`

export default typeDefs
