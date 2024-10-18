'use client'

import { ContrastOutlined, DarkMode, LightMode, Palette } from '@mui/icons-material'
import {
	colors,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListSubheader,
	Typography
} from '@mui/material'
import React from 'react'
import Shared from 'shared'
import { MODE, MODE_TEXT, PALETTE, PALETTE_TEXT } from './constant'

const Page: React.FC = () => {
	const { handler } = Shared.Hooks.useThemeStore()

	return (
		<List>
			<ListSubheader>화면 설정</ListSubheader>
			{MODE.map((mode) => (
				<ListItem key={`${mode}`}>
					<ListItemButton onClick={() => handler.mode(mode)}>
						<ListItemIcon>
							{
								{
									system: <ContrastOutlined />,
									light: <LightMode />,
									dark: <DarkMode />
								}[mode]
							}
						</ListItemIcon>
						{MODE_TEXT[mode]}
					</ListItemButton>
				</ListItem>
			))}

			<ListSubheader>색상 설정</ListSubheader>
			{PALETTE.map((palette) => (
				<ListItem key={palette}>
					<ListItemButton onClick={() => handler.color(palette)}>
						<ListItemIcon>
							<Palette sx={{ color: colors[palette][400] }} />
						</ListItemIcon>
						<Typography color={colors[palette][400]} fontWeight={700}>
							{PALETTE_TEXT[palette]}
						</Typography>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}

export default Page
