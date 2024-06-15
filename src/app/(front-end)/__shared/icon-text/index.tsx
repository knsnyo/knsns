import { Stack, Typography } from '@mui/material'
import React from 'react'
import { IIconTextProps } from 'src/app/(front-end)/__shared/icon-text/type'

const IconText: React.FC<IIconTextProps> = (props) => {
	return (
		<Stack direction='row' gap={1} alignItems='center'>
			{props.icon}
			<Typography>{props.text}</Typography>
		</Stack>
	)
}

export default IconText
