import { Typography } from '@mui/material'
import React from 'react'

export const Nickname: React.FC<React.PropsWithChildren> = (props) => (
	<Typography fontWeight={700}>{props.children}</Typography>
)
