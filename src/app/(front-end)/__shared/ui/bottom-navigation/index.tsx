'use client'

import {
	Alarm,
	HomeOutlined,
	PersonOutline,
	SearchOutlined
} from '@mui/icons-material'
import * as MUI from '@mui/material'
import React from 'react'
import useLogic from 'src/app/(front-end)/__shared/ui/bottom-navigation/logic'

export const BottomNavigation: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<MUI.Paper
			sx={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				maxWidth: 600,
				margin: 'auto'
			}}
			elevation={0}
		>
			<MUI.BottomNavigation
				showLabels
				onChange={handler.index}
				value={value.index}
			>
				<MUI.BottomNavigationAction label='feed' icon={<HomeOutlined />} />
				<MUI.BottomNavigationAction label='search' icon={<SearchOutlined />} />
				<MUI.BottomNavigationAction label='alarm' icon={<Alarm />} />
				<MUI.BottomNavigationAction label='my' icon={<PersonOutline />} />
			</MUI.BottomNavigation>
		</MUI.Paper>
	)
}
