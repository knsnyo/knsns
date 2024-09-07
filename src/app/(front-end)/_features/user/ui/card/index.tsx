import { Stack } from '@mui/material'
import Shared from 'src/app/(front-end)/__shared'
import { Avatar } from 'src/app/(front-end)/_features/User/ui/avatar'

import { Intro } from 'src/app/(front-end)/_features/User/ui/intro'
import { Nickname } from 'src/app/(front-end)/_features/User/ui/nickname'
import { Tagname } from 'src/app/(front-end)/_features/User/ui/tagname'

export const Card: React.FC = () => {
	return (
		<Stack direction='row' gap={1}>
			<Avatar />
			<Stack direction='column' gap={1}>
				<Nickname />
				<Tagname />
				<Intro />
			</Stack>
			<Shared.UI.Button text='팔로우하기' />
		</Stack>
	)
}
