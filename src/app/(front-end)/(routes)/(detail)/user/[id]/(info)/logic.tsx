'use client'

import { Feed } from 'features'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IQuery } from 'type/query'

export const useLogic = (id: string) => {
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

	const { loading, error, data, fetch } = Feed.api.useGetFeeds(args[tab])

	return {
		value: { loading, error, data, tab },
		handler: {
			fetch,
			tab: handleTab,
			nav: {
				feed: (_id: string) => () => router.push(`/feed/${_id}`)
			}
		}
	}
}
