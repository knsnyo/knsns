import * as MUI from '@mui/material'

export const Container: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<MUI.Container
			maxWidth='sm'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				paddingX: 0,
				'&.MuiContainer-root': {
					paddingX: 0
				}
			}}
		>
			{props.children}
		</MUI.Container>
	)
}
