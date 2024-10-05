'use client'

import { Stack, Tab, Tabs } from '@mui/material'
import { Search } from 'features'
import { IDetailPageParams } from 'type/detail-page'
import { useLogic } from './logic'
import { SearchRecentFeedTab, SearchUserTab } from './tab'

const Page: React.FC<IDetailPageParams> = (props) => {
	const { value, handler } = useLogic()

	return (
		<Stack>
			<Search.UI.Input init={props.params.id} isBack />
			<Tabs variant='fullWidth' value={value.tab} onChange={handler.tab}>
				<Tab label='최신' />
				<Tab label='사용자' />
			</Tabs>
			{
				{
					0: <SearchRecentFeedTab />,
					1: <SearchUserTab />
				}[value.tab]!
			}
		</Stack>
	)
}

export default Page
