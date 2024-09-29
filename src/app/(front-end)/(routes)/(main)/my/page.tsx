'use client'

import React from 'react'
import UserIdPage from '../../(detail)/user/[id]/page'
import Shared from '../../../__shared'

const Page: React.FC = () => {
	const id = React.useContext(Shared.Provider.Session)!

	return <UserIdPage params={{ id }} />
}

export default Page
