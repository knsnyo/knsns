'use client'

import { Stack, Tab, Tabs } from '@mui/material'
import { Search } from 'features'
import { useLogic } from './logic'

const Page: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack direction='column'>
			<Search.UI.Input />
			<Tabs variant='fullWidth' value={value.tab} onChange={handler.tab}>
				<Tab label='추천' />
				<Tab label='실시간' />
			</Tabs>
		</Stack>
	)
}

export default Page
