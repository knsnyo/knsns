'use client'

import { Feed } from 'features'
import { useRouter } from 'next/navigation'

const useLogic = () => {
	const router = useRouter()
	const { loading, error, data, fetch } = Feed.api.useGetFeeds()

	return {
		value: { loading, error, data },
		handler: {
			fetch,
			nav: {
				// eslint-disable-next-line arrow-body-style
				id: (id: string) => () => router.push(`/feed/${id}`)
			}
		}
	}
}

export default useLogic
