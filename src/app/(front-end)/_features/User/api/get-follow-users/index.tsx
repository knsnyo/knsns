import { useQuery } from '@apollo/client'
import { TFollowWithUser } from 'type/convolution'
import { Infinite } from 'type/infinite'
import { IQuery } from 'type/query'
import { query } from '../query'

export const useGetFollowUsers = (input?: IQuery) => {
	const { loading, error, data, fetchMore } = useQuery<{
		followUsers: Infinite<TFollowWithUser>
	}>(query.getFollowUsers, { variables: { input } })

	const fetch = async () => {
		await fetchMore({
			variables: {
				input: { lastId: data?.followUsers?.items?.at(-1)?.id, ...input }
			},
			updateQuery(prev, { fetchMoreResult }) {
				if (!prev) return prev

				return {
					followUsers: {
						...fetchMoreResult.followUsers,
						items: [...(prev?.followUsers?.items ?? []), ...fetchMoreResult.followUsers.items]
					}
				}
			}
		})
	}

	return { loading, error, data, fetch }
}
