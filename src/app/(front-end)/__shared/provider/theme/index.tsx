'use client'

import { colors } from '@mui/material'
import * as MUI from '@mui/material/styles'

const theme = MUI.createTheme({
	palette: {
		primary: colors.purple,
		warning: colors.yellow,
		error: colors.red,
		success: colors.green,
		grey: colors.grey
	}
})

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
	return <MUI.ThemeProvider theme={theme}>{props.children}</MUI.ThemeProvider>
}
