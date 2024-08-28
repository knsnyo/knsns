'use client'

import { EditRounded } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { useLogic } from 'src/app/(front-end)/_features/Write/ui/button/logic'

export const FAB: React.FC = () => {
	const { handler } = useLogic()

	return (
		<Fab
			color='primary'
			sx={{ position: 'absolute', bottom: 16, right: 16 }}
			onClick={handler.navigate}
		>
			<EditRounded />
		</Fab>
	)
}
