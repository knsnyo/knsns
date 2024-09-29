'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { IQuery } from 'type/query'
import Feature from '../../../../_features'

const useLogic = (id: string) => {
	const router = useRouter()
	const [tab, setTab] = React.useState<number>(0)

	const handleTab = (_: React.SyntheticEvent, value: number) => {
		setTab(value)
	}

	const args: { [key: number]: IQuery } = {
		0: { authorId: id },
		1: { likeId: id },
		2: { saveId: id }
	}

	const { loading, error, data, fetch } = Feature.Feed.api.useGetFeeds(
		args[tab]
	)

	return {
		value: { loading, error, data, tab },
		handler: {
			fetch,
			tab: handleTab,
			nav: {
				// eslint-disable-next-line arrow-body-style
				feed: (_id: string) => () => router.push(`/feed/${_id}`)
			}
		}
	}
}

export default useLogic
