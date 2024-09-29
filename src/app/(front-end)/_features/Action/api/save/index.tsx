import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { IAction } from 'type/action'

const query = gql`
	mutation SaveFeed($input: IAction!) {
		save(input: $input) {
			updatedAt
		}
	}
`

export const useSave = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = (input: IAction) => {
		change({ variables: { input } })
	}

	return { loading, error, mutation }
}
