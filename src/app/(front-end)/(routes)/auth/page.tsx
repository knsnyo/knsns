import { Stack, Typography } from '@mui/material'
import { Auth } from 'features'
import React from 'react'

const Page: React.FC = () => (
	<Stack
		direction='column'
		alignItems='center'
		justifyContent='center'
		height='100vh'
	>
		<Typography>계정을 선택해주세요.</Typography>
		<Auth.UI.GoogleButton />
	</Stack>
)

export default Page
