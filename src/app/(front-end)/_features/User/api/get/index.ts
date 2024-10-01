import { useQuery } from '@apollo/client/react/hooks/useQuery'
import gql from 'graphql-tag'
import { TUserWithFollow } from 'type/convolution'

const query = gql`
	query GetUser($input: IDetail!) {
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

			follower {
				followedUserId
			}

			followed {
				userId
			}
		}
	}
`

export const useGetUser = (id: string) => {
	const { loading, data, error } = useQuery<{ user: TUserWithFollow }>(query, {
		variables: { input: { id } }
	})

	return { loading, data, error }
}
