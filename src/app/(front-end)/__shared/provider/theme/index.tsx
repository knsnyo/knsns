'use client'

import { colors } from '@mui/material'
import * as MUI from '@mui/material/styles'
import React from 'react'
import { useThemeStore } from '../../hooks/useThemeStore'
import { createThemeStore, TThemeStore } from './store'

export const ThemeContext = React.createContext<TThemeStore>(null)

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
	const themeRef = React.useRef<TThemeStore>(null)

	if (!themeRef.current) {
		themeRef.current = createThemeStore()
	}

	return (
		<ThemeContext.Provider value={themeRef.current}>
			<MUIThemeProvider>{props.children}</MUIThemeProvider>
		</ThemeContext.Provider>
	)
}

const MUIThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
	const themeStore = useThemeStore()

	const theme = MUI.createTheme({
		palette: {
			primary: colors[themeStore.value.state.color],
			warning: colors.yellow,
			error: colors.red,
			success: colors.green,
			grey: colors.grey,
			mode: themeStore.value.state.mode
		}
	})

	return <MUI.ThemeProvider theme={theme}>{props.children}</MUI.ThemeProvider>
}
