'use client'

import React from 'react'
import Shared from 'shared'
import { IDetailPageParams } from 'type/detail-page'

const Page: React.FC<IDetailPageParams> = (props) => {
	const uid = Shared.Hooks.useUid()

	return <>Follow Tab</>
}

export default Page
