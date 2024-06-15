import { Container } from '@mui/material'
import { ILayoutProps } from 'src/_type/layout'

const Layout = (props: ILayoutProps) => {
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			{props.children}
		</Container>
	)
}

export default Layout
