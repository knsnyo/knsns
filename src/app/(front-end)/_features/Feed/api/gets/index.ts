import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { TFeedWithAuthor } from 'type/convolution'
import { Infinite } from 'type/infinite'

const query = gql`
	query GetFeeds($input: IQuery) {
		feeds(input: $input) {
			lastId
			hasNext
			items {
				id
				createdAt
				image
				content
				author {
					displayName
					tagname
					photoUrl
				}
			}
		}
	}
`

export const useGetFeeds = () => {
	const { loading, error, data, fetchMore } = useQuery<{
		feeds: Infinite<TFeedWithAuthor>
	}>(query)

	// eslint-disable-next-line arrow-body-style
	const fetch = async () => {
		await fetchMore({
			variables: { input: { lastId: data?.feeds?.lastId } },
			updateQuery(prev, { fetchMoreResult }) {
				if (!prev) return prev

				return {
					feeds: {
						...fetchMoreResult.feeds,
						items: [...prev.feeds.items, ...fetchMoreResult.feeds.items]
					}
				}
			}
		})
	}

	return { loading, error, data, fetch }
}
