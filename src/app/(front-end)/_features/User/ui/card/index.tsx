import { Stack } from '@mui/material'
import { User } from '@prisma/client'
import Shared from 'shared'
import { Avatar } from '../avatar'
import { Intro } from '../intro'
import { Nickname } from '../nickname'
import { Tagname } from '../tagname'

export const Card: React.FC<{ user: User }> = (props) => {
	return (
		<Stack direction='row' gap={1} width='100%'>
			<Avatar src={props.user.photoUrl ?? undefined} />
			<Stack direction='column' justifyContent='center'>
				<Nickname>{props.user.displayName}</Nickname>
				<Tagname>{props.user.tagname}</Tagname>
				<Intro>{props.user.intro}</Intro>
			</Stack>
			<Shared.UI.Button text='팔로우하기' />
		</Stack>
	)
}
