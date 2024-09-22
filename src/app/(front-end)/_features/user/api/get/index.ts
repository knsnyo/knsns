import { useQuery } from '@apollo/client/react/hooks/useQuery'
import gql from 'graphql-tag'

const query = gql`
	query GetUser($input: Detail!) {
		user(input: $input) {
			uid
			email
			displayName
			photoUrl

			backgroundImage
			tagname
			intro
			link

			createdAt
		}
	}
`

export const useGetUser = (id: string) => {
	const { loading, data, error } = useQuery(query, {
		variables: { input: { id } }
	})

	return { loading, data, error }
}
