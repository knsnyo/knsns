import { Stack } from '@mui/material'
import Shared from 'shared'
import { Avatar } from '../avatar'
import { Intro } from '../intro'
import { Nickname } from '../nickname'
import { Tagname } from '../tagname'

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
