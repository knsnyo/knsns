'use client'

import { Box } from '@mui/material'
import { Feed, Write } from 'features'
import Shared from 'shared'
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
						<Feed.UI.Card feed={feed} />
					</Box>
				)
			})}
			<Write.UI.FAB />
		</Shared.UI.InfiniteScroll>
	)
}

export default Page
