import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { TUserWithFollow } from 'type/convolution'
import { Infinite } from 'type/infinite'
import { IQuery } from 'type/query'
import { query } from '../query'

export const useGetSearchUsers = (input: IQuery) => {
	const { loading, data, error, fetchMore } = useQuery<{
		users: Infinite<TUserWithFollow>
	}>(query.getSearchUsers, { variables: { input } })

	const fetch = async () => {
		await fetchMore({
			variables: {
				input: { lastId: data?.users?.items?.at(-1)?.id, ...input }
			},
			updateQuery(prev, { fetchMoreResult }) {
				if (!prev) return prev

				return {
					users: {
						...fetchMoreResult.users,
						items: [...(prev?.users?.items ?? []), ...fetchMoreResult.users.items]
					}
				}
			}
		})
	}

	return { loading, data, error, fetch }
}
