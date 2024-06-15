import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ILayoutProps } from 'src/_type/layout'

const RootLayout = (props: ILayoutProps) => {
	return (
		<html lang='en'>
			<body style={{ margin: 0 }}>
				<AppRouterCacheProvider options={{ key: 'css' }}>
					{props.children}
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}

export default RootLayout
