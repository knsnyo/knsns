'use client'

import { Box, Divider, Stack } from '@mui/material'
import Shared from '../../../__shared'
import Feature from '../../../_features'
import useLogic from './logic'

const Page: React.FC = (props) => {
	const { value, handler } = useLogic()

	return (
		<Stack direction='column' gap={2}>
			<Feature.User.UI.Info />
			<Divider />
			<Shared.UI.InfiniteScroll
				data={value.data?.feeds.items ?? []}
				loading={value.loading}
				error={false}
				hasNext={value.data?.feeds?.hasNext ?? false}
				refetch={handler.fetch}
			>
				{value.data?.feeds.items?.map((feed) => {
					return (
						<Box key={feed.id} onClick={handler.nav.id(feed.id)} width='100%'>
							<Feature.Feed.UI.Card feed={feed} />
						</Box>
					)
				})}
			</Shared.UI.InfiniteScroll>
		</Stack>
	)
}

export default Page
