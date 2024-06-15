import { Stack } from '@mui/material'
import Button from 'src/app/(front-end)/__shared/button'
import Intro from 'src/app/(front-end)/_features/user/ui/intro'
import Nickname from 'src/app/(front-end)/_features/user/ui/nickname'
import ProfileImage from 'src/app/(front-end)/_features/user/ui/profile-image'
import Tagname from 'src/app/(front-end)/_features/user/ui/tagname'

const Card: React.FC = () => {
	return (
		<Stack direction='row' gap={1}>
			<ProfileImage />
			<Stack direction='column' gap={1}>
				<Nickname />
				<Tagname />
				<Intro />
			</Stack>
			<Button text='팔로우하기' />
		</Stack>
	)
}

export default Card
