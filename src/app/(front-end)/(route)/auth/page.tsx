import { Typography } from '@mui/material'
import React from 'react'
import Feature from 'src/app/(front-end)/_features'

const Page: React.FC = () => {
	return (
		<>
			<Typography>계정을 선택해주세요.</Typography>
			<Feature.Auth.UI.GoogleButton />
		</>
	)
}

export default Page
