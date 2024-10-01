'use client'

import React from 'react'
import Shared from 'shared'
import UserIdPage from '../../(detail)/user/[id]/(info)/page'

const Page: React.FC = () => {
	const id = React.useContext(Shared.Provider.Session)!

	return <UserIdPage params={{ id }} />
}

export default Page
