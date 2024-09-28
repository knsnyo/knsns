import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { TFeedWithAuthor } from 'type/convolution'
import { Infinite } from 'type/infinite'
import { IQuery } from 'type/query'
import Common from '../../../../../_common'

const query = gql`
	query GetFeeds($input: IQuery) {
		feeds(input: $input) {
			hasNext
			items {
				id
				createdAt
				image
				content
				author {
					uid
					displayName
					tagname
					photoUrl
				}
				action {
					likeUserId
				}
			}
		}
	}
`

export const useGetFeeds = (params?: IQuery) => {
	const input = Common.utils.generateWhere(params)

	const { loading, error, data, fetchMore } = useQuery<{
		feeds: Infinite<TFeedWithAuthor>
	}>(query, { variables: { input } })

	// eslint-disable-next-line arrow-body-style
	const fetch = async () => {
		await fetchMore({
			variables: { input: { lastId: data?.feeds?.items?.at(-1)?.id } },
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
