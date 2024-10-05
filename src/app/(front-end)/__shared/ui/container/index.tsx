import * as MUI from '@mui/material'

export const Container: React.FC<React.PropsWithChildren> = (props) => (
	<MUI.Container
		maxWidth='sm'
		sx={{
			display: 'flex',
			flexDirection: 'column',
			paddingX: 0,
			'&.MuiContainer-root': {
				paddingX: 0
			}
		}}
	>
		{props.children}
	</MUI.Container>
)
