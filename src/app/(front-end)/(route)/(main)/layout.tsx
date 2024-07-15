import { Container } from '@mui/material'
import { ILayoutProps } from 'src/_type/layout'

const Layout: React.FC<ILayoutProps> = (props) => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				paddingX: 0
			}}
			maxWidth='sm'
		>
			{props.children}
		</Container>
	)
}

export default Layout
