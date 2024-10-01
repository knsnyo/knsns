'use client'

import { IDetailPageParams } from 'type/detail-page'

import { Box, Stack, Tab, Tabs } from '@mui/material'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'
import Shared from '../../../../__shared'
import Feature from '../../../../_features'
import useLogic from './logic'

const Page: React.FC<IDetailPageParams> = (props) => {
	const id = React.useContext(Shared.Provider.Session)
	const pathname = usePathname()

	if (id === props.params.id && pathname !== '/my') {
		redirect('/my')
	}

	const { value, handler } = useLogic(props.params.id)

	return (
		<Stack direction='column' gap={2}>
			<Feature.User.UI.Info />

			<Tabs
				value={value.tab}
				onChange={handler.tab}
				// variant='scrollable'
				variant='fullWidth'
			>
				<Tab label='내 쓰레기' />
				<Tab label='좋아한 쓰레기' />
				<Tab label='저장한 쓰레기' />
				{/* <Tab label='답장한 쓰레기' /> */}
			</Tabs>

			<Shared.UI.InfiniteScroll
				data={value.data?.feeds.items ?? []}
				loading={value.loading}
				error={false}
				hasNext={value.data?.feeds?.hasNext ?? false}
				refetch={handler.fetch}
			>
				{value.data?.feeds.items?.map((feed) => {
					return (
						<Box key={feed.id} onClick={handler.nav.feed(feed.id)} width='100%'>
							<Feature.Feed.UI.Card feed={feed} />
						</Box>
					)
				})}
			</Shared.UI.InfiniteScroll>
		</Stack>
	)
}

export default Page
