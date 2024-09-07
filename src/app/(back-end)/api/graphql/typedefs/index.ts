import gql from 'graphql-tag'
import { common } from 'src/app/(back-end)/api/graphql/typedefs/common'
import { feed } from 'src/app/(back-end)/api/graphql/typedefs/feed'
import { user } from 'src/app/(back-end)/api/graphql/typedefs/user'

const typeDefs = gql`
	${common}
	${feed}
	${user}
`

export default typeDefs
