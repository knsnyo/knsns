'use client'

import * as MUI from '@mui/material'
import FirebaseAuth from 'src/_third-party/_firebase/auth'
import { IAppBarProps } from 'src/app/(front-end)/__shared/appbar/type'

const AppBar: React.FC<IAppBarProps> = (props) => {
	const logout = () => {
		FirebaseAuth.Google.signOut()
		FirebaseAuth.Session.remove()
	}

	return (
		<MUI.AppBar position='sticky' sx={{ padding: 2 }} color='primary'>
			<MUI.Typography fontWeight={700} onClick={logout}>
				{props.text ?? '쓰레기통'}
			</MUI.Typography>
		</MUI.AppBar>
	)
}

export default AppBar
