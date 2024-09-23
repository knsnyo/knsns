import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { cookies } from 'next/headers'
import React from 'react'

import { FirebaseAuth } from 'third-party/_firebase/auth'
import Shared from './(front-end)/__shared'

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
	const session = cookies().get(FirebaseAuth.Session.key)?.value || null

	return (
		<html lang='en'>
			<body>
				<AppRouterCacheProvider>
					<Shared.Provider.Auth uid={session}>
						<Shared.Provider.Graphql>
							<Shared.Provider.Theme>
								{/* <Feature.Redux.ReduxProvider> */}
								<CssBaseline />
								<Shared.UI.Container>{props.children}</Shared.UI.Container>
								{/* </Feature.Redux.ReduxProvider> */}
							</Shared.Provider.Theme>
						</Shared.Provider.Graphql>
					</Shared.Provider.Auth>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}

export default RootLayout
