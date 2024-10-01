'use client'

import { Feed } from 'features'
import { IDetailPageParams } from 'type/detail-page'

const Page: React.FC<IDetailPageParams> = (props) => {
	const { loading, error, data } = Feed.api.useGetFeed(props.params.id)

	if (loading) {
		return <></>
	}

	if (error) {
		return <></>
	}

	return <Feed.UI.Card feed={data.feed} />
}

export default Page
