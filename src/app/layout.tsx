import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import React from 'react'

import Shared from 'shared'

const RootLayout: React.FC<React.PropsWithChildren> = (props) => (
	<html lang='en'>
		<body>
			<AppRouterCacheProvider>
				<Shared.Provider.Auth>
					<Shared.Provider.Graphql>
						<Shared.Provider.Theme>
							<CssBaseline />
							<Shared.UI.Container>{props.children}</Shared.UI.Container>
						</Shared.Provider.Theme>
					</Shared.Provider.Graphql>
				</Shared.Provider.Auth>
			</AppRouterCacheProvider>
		</body>
	</html>
)

export default RootLayout
