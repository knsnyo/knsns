'use client'

import { Typography } from '@mui/material'
import { useLogic } from './logic'

export const GoogleButton: React.FC = () => {
	const { handler } = useLogic()

	return <Typography onClick={handler.login}>Google Button</Typography>
}
