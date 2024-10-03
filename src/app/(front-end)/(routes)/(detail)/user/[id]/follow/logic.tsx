import { User } from 'features'
import { useRouter } from 'next/navigation'
import React from 'react'

export const useLogic = (id: string) => {
	const [index, setIndex] = React.useState<number>(0)
	const router = useRouter()

	const follower = User.api.useGetFollowUsers({ followingId: id })
	const following = User.api.useGetFollowUsers({ followerId: id })

	const handleIndex = (_: React.SyntheticEvent, value: number) => {
		setIndex(value)
	}

	const goUserId = (id: string) => {
		return () => {
			router.push(`/user/${id}`)
		}
	}

	return {
		value: { index, follower, following },
		handler: {
			follower: follower.fetch,
			following: following.fetch,
			index: handleIndex,
			nav: {
				user: goUserId
			}
		}
	}
}
