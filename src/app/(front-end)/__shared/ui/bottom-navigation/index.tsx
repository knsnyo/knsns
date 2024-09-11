'use client'

import {
	HomeOutlined,
	PersonOutline,
	SearchOutlined
} from '@mui/icons-material'
import * as MUI from '@mui/material'
import React from 'react'
import useLogic from 'src/app/(front-end)/__shared/ui/bottom-navigation/logic'

export const BottomNavigation: React.FC = () => {
	const { handler } = useLogic()

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
			<MUI.BottomNavigation showLabels onChange={handler.index}>
				<MUI.BottomNavigationAction label='feed' icon={<HomeOutlined />} />
				<MUI.BottomNavigationAction label='search' icon={<SearchOutlined />} />
				<MUI.BottomNavigationAction label='my' icon={<PersonOutline />} />
			</MUI.BottomNavigation>
		</MUI.Paper>
	)
}
