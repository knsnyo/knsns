import { ArrowBackIosNewOutlined, Search } from '@mui/icons-material'
import { IconButton, InputBase, Stack, useTheme } from '@mui/material'
import { useLogic } from './logic'

export const Input: React.FC<{ init?: string; isBack?: boolean }> = (props) => {
	const theme = useTheme()
	const { value, handler } = useLogic(props.init)

	return (
		<Stack direction='row' alignItems='center'>
			{props?.isBack && (
				<IconButton onClick={handler.nav.back}>
					<ArrowBackIosNewOutlined color='primary' />
				</IconButton>
			)}
			<Stack
				direction='row'
				border={`1px solid ${theme.palette.primary.main}`}
				bgcolor={theme.palette.background.default}
				marginX={2}
				marginY={1}
				borderRadius={1}
				flex={1}
			>
				<InputBase
					autoFocus
					color='primary'
					placeholder='분리수거'
					fullWidth
					sx={{ paddingX: 2 }}
					value={value.keyword}
					onChange={handler.keyword}
				/>
				<IconButton onClick={handler.submit}>
					<Search color='primary' />
				</IconButton>
			</Stack>
		</Stack>
	)
}
