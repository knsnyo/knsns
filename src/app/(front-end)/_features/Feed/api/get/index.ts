import { useQuery } from '@apollo/client/react/hooks/useQuery'
import gql from 'graphql-tag'

const query = gql`
	query GetFeedById($input: Detail!) {
		feed(input: $input) {
			image
			content
			createdAt
			author {
				displayName
				tagname
				photoUrl
			}
		}
	}
`

export const useGetFeed = (id: string) => {
	const { loading, error, data } = useQuery(query, {
		variables: { input: { id } }
	})

	return { loading, error, data }
}
