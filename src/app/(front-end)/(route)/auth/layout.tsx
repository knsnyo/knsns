import { Container } from '@mui/material'
import { ILayoutProps } from 'src/_type/layout'

const Layout: React.FC<ILayoutProps> = (props) => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh'
			}}
		>
			{props.children}
		</Container>
	)
}

export default Layout
