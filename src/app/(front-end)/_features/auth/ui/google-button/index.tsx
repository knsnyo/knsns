'use client'

import { Typography } from '@mui/material'
import useLogic from 'src/app/(front-end)/_features/Auth/ui/google-button/logic'

const GoogleButton: React.FC = () => {
	const { handler } = useLogic()

	return <Typography onClick={handler.login}>Google Button</Typography>
}

export default GoogleButton
