'use client'

import { colors } from '@mui/material'
import * as MUI from '@mui/material/styles'

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
	const mode = 'dark'
	// const mode = 'light'
	const theme = MUI.createTheme({
		palette: {
			primary: colors.purple,
			warning: colors.yellow,
			error: colors.red,
			success: colors.green,
			grey: colors.grey,
			mode
		}
	})

	return <MUI.ThemeProvider theme={theme}>{props.children}</MUI.ThemeProvider>
}
