'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export const useLogic = () => {
	const router = useRouter()
	const [tab, setTab] = React.useState<number>(0)

	const handleTab = (_: React.SyntheticEvent, value: number) => {
		setTab(value)
	}

	const back = () => router.back()

	return {
		value: { tab },
		handler: {
			tab: handleTab,
			nav: { back }
		}
	}
}
