'use client'

import * as MUI from '@mui/material'
import { IAppBarProps } from 'src/app/(front-end)/__shared/appbar/type'

const AppBar: React.FC<IAppBarProps> = (props) => {
	return (
		<MUI.AppBar position='sticky' sx={{ padding: 2 }} color='primary'>
			<MUI.Typography fontWeight={700}>
				{props.text ?? '쓰레기통'}
			</MUI.Typography>
		</MUI.AppBar>
	)
}

export default AppBar
