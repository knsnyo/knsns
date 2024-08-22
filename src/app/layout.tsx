import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import React from 'react'
import { ILayoutProps } from 'src/_type/layout'
import ApolloClientProvider from 'src/app/(front-end)/__shared/provider/graphql'

const RootLayout: React.FC<ILayoutProps> = (props) => {
	return (
		<html lang='en'>
			<body>
				<AppRouterCacheProvider>
					<ApolloClientProvider>
						<CssBaseline />
						{props.children}
					</ApolloClientProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}

export default RootLayout
