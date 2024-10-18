'use client'

import { Box, Stack, Tab, Tabs } from '@mui/material'
import { User } from 'features'
import React from 'react'
import Shared from 'shared'
import { IDetailPageParams } from 'type/detail-page'
import { useLogic } from './logic'

const Page: React.FC<IDetailPageParams> = (props) => {
	const { value, handler } = useLogic(props.params.id)

	const pickUser = { 0: value.follower, 1: value.following }[value.index]
	const pickUserFetch = { 0: handler.follower, 1: handler.following }[value.index]

	return (
		<Stack>
			<Tabs variant='fullWidth' value={value.index} onChange={handler.index}>
				<Tab label='팔로워' />
				<Tab label='팔로잉' />
			</Tabs>
			<Shared.UI.InfiniteScroll
				data={pickUser?.data?.followUsers?.items ?? []}
				error={false}
				hasNext={pickUser?.data?.followUsers?.hasNext ?? false}
				loading={pickUser?.loading ?? false}
				refetch={pickUserFetch!}
			>
				{(pickUser?.data?.followUsers.items ?? []).map((follow, index) => {
					const user = follow[value.index === 0 ? 'followedUser' : 'user']!
					return (
						<Box key={user.id} width='100%' onClick={handler.nav.user(user.uid)}>
							<User.UI.Card user={user} />
						</Box>
					)
				})}
			</Shared.UI.InfiniteScroll>
		</Stack>
	)
}

export default Page
