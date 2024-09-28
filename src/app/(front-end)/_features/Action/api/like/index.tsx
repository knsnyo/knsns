import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { IAction } from 'type/action'

const query = gql`
	mutation LikeFeed($input: IAction!) {
		like(input: $input) {
			updatedAt
		}
	}
`

export const useLike = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = (input: IAction) => {
		change({ variables: { input } })
	}

	return { loading, error, mutation }
}
