'use client'

import { IDetailPageParams } from 'type/detail-page'

import { redirect } from 'next/navigation'
import React from 'react'
import Shared from '../../../../__shared'
import Feature from '../../../../_features'

const Page: React.FC<IDetailPageParams> = (props) => {
	const id = React.useContext(Shared.Provider.Session)

	if (id === props.params.id) {
		redirect('/my')
	}

	return <Feature.User.UI.Info />
}

export default Page
