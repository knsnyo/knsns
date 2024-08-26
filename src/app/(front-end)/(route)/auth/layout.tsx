import { Container } from '@mui/material'
import React from 'react'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
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
