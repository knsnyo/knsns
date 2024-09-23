'use client'

import { IDetailPageParams } from 'type/detail-page'
import Feature from '../../../../_features'

const Page: React.FC<IDetailPageParams> = (props) => {
	const { loading, error, data } = Feature.Feed.api.useGetFeed(props.params.id)

	if (loading) {
		return <></>
	}

	if (error) {
		return <></>
	}

	return <Feature.Feed.UI.Card feed={data.feed} />
}

export default Page
