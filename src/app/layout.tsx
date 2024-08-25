import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import React from 'react'
import { ILayoutProps } from 'src/_type/layout'
import AuthProvider from 'src/app/(front-end)/__shared/provider/auth'
import ApolloClientProvider from 'src/app/(front-end)/__shared/provider/graphql'

const RootLayout: React.FC<ILayoutProps> = (props) => {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>
					<AppRouterCacheProvider>
						<ApolloClientProvider>
							<CssBaseline />
							{props.children}
						</ApolloClientProvider>
					</AppRouterCacheProvider>
				</AuthProvider>
			</body>
		</html>
	)
}

export default RootLayout
