import { Stack, Typography } from '@mui/material'
import React from 'react'
import type { IIconTextProps } from './type'

export const IconText: React.FC<IIconTextProps> = (props) => (
	<Stack direction='row' gap={1} alignItems='center'>
		{props.icon}
		<Typography color={props.textColor}>{props.text}</Typography>
	</Stack>
)
