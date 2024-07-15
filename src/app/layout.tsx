import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import React from 'react'
import { ILayoutProps } from 'src/_type/layout'

const RootLayout: React.FC<ILayoutProps> = (props) => {
	return (
		<html lang='en'>
			<body>
				<AppRouterCacheProvider>
					<CssBaseline />
					{props.children}
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}

export default RootLayout
