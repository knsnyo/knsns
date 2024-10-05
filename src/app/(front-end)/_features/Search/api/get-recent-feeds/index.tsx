import { useQuery } from '@apollo/client'
import { TFeedWithAuthor } from 'type/convolution'
import { Infinite } from 'type/infinite'
import { IQuery } from 'type/query'
import { query } from '../query'

export const useGetSearchRecentFeeds = (input?: IQuery) => {
	const { loading, error, data, fetchMore } = useQuery<{
		feeds: Infinite<TFeedWithAuthor>
	}>(query.getSearchRecentFeeds, { variables: { input } })

	const fetch = async () => {
		await fetchMore({
			variables: {
				input: { lastId: data?.feeds?.items?.at(-1)?.id, ...input }
			},
			updateQuery(prev, { fetchMoreResult }) {
				if (!prev) return prev

				return {
					feeds: {
						...fetchMoreResult.feeds,
						items: [
							...(prev?.feeds?.items ?? []),
							...fetchMoreResult.feeds.items
						]
					}
				}
			}
		})
	}

	return { loading, error, data, fetch }
}
