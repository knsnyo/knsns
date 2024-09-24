'use client'

import { Box } from '@mui/material'
import Shared from '../../../__shared'
import Feature from '../../../_features'
import useLogic from './logic'

const Page: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Shared.UI.InfiniteScroll
			data={value.data?.feeds.items ?? []}
			loading={value.loading}
			error={false}
			hasNext={value.data?.feeds.hasNext ?? false}
			refetch={handler.fetch}
		>
			{value.data?.feeds.items?.map((feed) => {
				return (
					<Box key={feed.id} onClick={handler.nav.id(feed.id)} width='100%'>
						<Feature.Feed.UI.Card feed={feed} />
					</Box>
				)
			})}
			<Feature.Write.UI.FAB />
		</Shared.UI.InfiniteScroll>
	)
}

export default Page
