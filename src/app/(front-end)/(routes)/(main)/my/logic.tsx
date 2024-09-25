'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from '../../../__shared'
import Feature from '../../../_features'

const useLogic = () => {
	const router = useRouter()
	const authorId = React.useContext(Shared.Provider.Session)
	const { loading, error, data, fetch } = Feature.Feed.api.useGetFeeds({
		authorId: authorId ?? undefined
	})

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
