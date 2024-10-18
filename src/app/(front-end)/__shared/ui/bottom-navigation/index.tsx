'use client'

import { Alarm, HomeOutlined, PersonOutline, SearchOutlined } from '@mui/icons-material'
import * as MUI from '@mui/material'
import React from 'react'
import { useLogic } from './logic'

export const BottomNavigation: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<MUI.Box sx={{ pb: 7 }}>
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
				<MUI.BottomNavigation onChange={handler.index} value={value.index}>
					<MUI.BottomNavigationAction icon={<HomeOutlined />} />
					<MUI.BottomNavigationAction icon={<SearchOutlined />} />
					<MUI.BottomNavigationAction icon={<Alarm />} />
					<MUI.BottomNavigationAction icon={<PersonOutline />} />
				</MUI.BottomNavigation>
			</MUI.Paper>
		</MUI.Box>
	)
}
