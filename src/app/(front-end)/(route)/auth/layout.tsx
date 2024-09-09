import React from 'react'
import Shared from 'src/app/(front-end)/__shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<Shared.UI.Container>
			<Shared.UI.AppBar text='로그인' />
			{props.children}
		</Shared.UI.Container>
	)
}

export default Layout
