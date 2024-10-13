'use client'

import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import * as MUI from '@mui/material'

import { useLogic } from './logic'
import type { IAppBarProps } from './type'

export const AppBar: React.FC<IAppBarProps> = (props) => {
	const { handler } = useLogic()

	return (
		<MUI.AppBar position='sticky' color='primary' enableColorOnDark>
			<MUI.Stack direction='row' alignItems='center' padding={2} gap={1}>
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
				<MUI.Typography fontWeight={700} width={80}>
					{props.text ?? '쓰레기통'}
				</MUI.Typography>
			</MUI.Stack>
		</MUI.AppBar>
	)
}
