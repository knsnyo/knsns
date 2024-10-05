'use client'

import React from 'react'

export const useLogic = () => {
	const [tab, setTab] = React.useState<number>(0)

	const handleTab = (_: React.SyntheticEvent, value: number) => {
		setTab(value)
	}

	return {
		value: { tab },
		handler: {
			tab: handleTab
		}
	}
}
