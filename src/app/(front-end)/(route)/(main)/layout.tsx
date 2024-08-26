import { Container } from '@mui/material'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<Container
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
		</Container>
	)
}

export default Layout
