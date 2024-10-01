import { useQuery } from '@apollo/client/react/hooks/useQuery'
import gql from 'graphql-tag'
import { TFeedWithAuthor } from 'type/convolution'

const query = gql`
	query GetFeedById($input: IDetail!) {
		feed(input: $input) {
			image
			content
			createdAt
			author {
				uid
				displayName
				tagname
				photoUrl
			}
			action {
				likeUserId
				saveUserId
			}
		}
	}
`

export const useGetFeed = (id: string) => {
	const { loading, error, data } = useQuery<{ feed: TFeedWithAuthor }>(query, {
		variables: { input: { id } }
	})

	return { loading, error, data }
}
