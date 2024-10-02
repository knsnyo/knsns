'use client'

import { Feed } from 'features'
import { useRouter } from 'next/navigation'

export const useLogic = () => {
	const router = useRouter()
	const { loading, error, data, fetch } = Feed.api.useGetFeeds()

	return {
		value: { loading, error, data },
		handler: {
			fetch,
			nav: {
				id: (id: string) => {
					return () => {
						return router.push(`/feed/${id}`)
					}
				}
			}
		}
	}
}
