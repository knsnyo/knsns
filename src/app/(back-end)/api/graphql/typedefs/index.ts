import gql from 'graphql-tag'
import { common } from './_common'
import { action } from './action'
import { feed } from './feed'
import { user } from './user'

export const typeDefs = gql`
	${common}
	${action}
	${feed}
	${user}

	type Mutation {
		hello: String
	}

	type Subscription {
		hello: String
	}
`
