'use client'

import React from 'react'
import { Provider } from '../../provider'

export const useThemeStore = () => {
	const themeStore = React.useContext(Provider.ThemeContext)

	if (!themeStore) {
		throw new Error('ThemeProvider 안에서 사용해 주세요.')
	}

	const state = React.useSyncExternalStore(themeStore.subscribe, themeStore.getState)

	return {
		value: { state },
		handler: {
			mode: themeStore.setMode,
			color: themeStore.setColor
		}
	}
}
