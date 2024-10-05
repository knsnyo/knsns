'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Shared from 'shared'

export const useLogic = (_keyword?: string) => {
	const [keyword, setKeyword] = Shared.Hooks.useInput(decodeURI(_keyword ?? ''))
	const router = useRouter()
	const [tab, setTab] = React.useState<number>(0)

	const handleTab = (_: React.SyntheticEvent, value: number) => {
		setTab(value)
	}

	const submit = () => {
		if (keyword.trim().length === 0) return
		router.push(`/search/${keyword.trim()}`)
	}

	const back = () => router.back()

	return {
		value: { keyword, tab },
		handler: {
			keyword: setKeyword,
			tab: handleTab,
			submit,
			nav: { back }
		}
	}
}
