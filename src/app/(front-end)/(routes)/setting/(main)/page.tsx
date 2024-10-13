'use client'

import { ColorLens, Logout } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { useLogic } from './logic'

const Page: React.FC = () => {
	const { handler } = useLogic()

	return (
		<List>
			<ListItem>
				<ListItemButton onClick={handler.nav.theme}>
					<ListItemIcon>
						<ColorLens />
					</ListItemIcon>
					테마
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton onClick={handler.logout}>
					<ListItemIcon>
						<Logout />
					</ListItemIcon>
					로그아웃
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default Page
