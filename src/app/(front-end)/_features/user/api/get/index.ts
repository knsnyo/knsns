import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { TUserWithFollow } from 'type/convolution'
import { query } from '../query'

export const useGetUser = (id: string) => {
	const { loading, data, error } = useQuery<{ user: TUserWithFollow }>(query.getUser, {
		variables: { input: { id } }
	})

	return { loading, data, error }
}
