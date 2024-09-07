'use client'

import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import * as MUI from '@mui/material'
import { FirebaseAuth } from 'src/_third-party/_firebase/auth'
import useLogic from 'src/app/(front-end)/__shared/ui/appbar/logic'
import { IAppBarProps } from 'src/app/(front-end)/__shared/ui/appbar/type'

export const AppBar: React.FC<IAppBarProps> = (props) => {
	const { handler } = useLogic()

	const logout = () => {
		FirebaseAuth.Google.signOut()
		FirebaseAuth.Session.remove()
	}

	return (
		<MUI.AppBar
			position='sticky'
			sx={{
				padding: 2,
				display: 'flex',
				flexDirection: 'row',
				gap: '10px',
				alignItems: 'center'
			}}
			color='primary'
		>
			{props?.back && (
				<MUI.Box
					onClick={handler.back}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<ArrowBackIosNewOutlined sx={{ fontSize: 15 }} />
				</MUI.Box>
			)}
			<MUI.Typography fontWeight={700} onClick={logout}>
				{props.text ?? '쓰레기통'}
			</MUI.Typography>
		</MUI.AppBar>
	)
}
