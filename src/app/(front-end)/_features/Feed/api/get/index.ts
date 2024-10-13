import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { TFeedWithAuthor } from 'type/convolution'
import { query } from '../query'

export const useGetFeed = (id: string) => {
	const { loading, error, data } = useQuery<{ feed: TFeedWithAuthor }>(
		query.feed,
		{ variables: { input: { id } } }
	)

	return { loading, error, data }
}
