import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { IAction } from 'type/action'

const query = gql`
	mutation Follow($input: IAction!) {
		follow(input: $input) {
			updatedAt
		}
	}
`

export const useFollow = () => {
	const [change, { loading, error }] = useMutation(query)

	const mutation = async (input: IAction) => {
		await change({ variables: { input } })
	}

	return { loading, error, mutation }
}
