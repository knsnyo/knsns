import { Stack, Typography } from '@mui/material'
import React from 'react'
import { IIconTextProps } from 'src/app/(front-end)/__shared/ui/icon-text/type'

export const IconText: React.FC<IIconTextProps> = (props) => {
	return (
		<Stack direction='row' gap={1} alignItems='center'>
			{props.icon}
			<Typography color={props.textColor}>{props.text}</Typography>
		</Stack>
	)
}
