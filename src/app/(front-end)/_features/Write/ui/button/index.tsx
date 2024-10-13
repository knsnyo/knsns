'use client'

import { EditRounded } from '@mui/icons-material'
import { Fab, useTheme } from '@mui/material'
import { useLogic } from './logic'

export const FAB: React.FC = () => {
	const theme = useTheme()
	const { handler } = useLogic()

	return (
		<Fab
			color='primary'
			sx={{
				position: 'fixed',
				bottom: 28,
				left: 0,
				right: 0,
				marginLeft: 'auto',
				marginRight: 'auto'
			}}
			onClick={handler.navigate}
		>
			<EditRounded sx={{ color: theme.palette.background.default }} />
		</Fab>
	)
}
