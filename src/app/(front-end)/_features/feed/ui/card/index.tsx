import { MoreHorizRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import Nickname from 'src/app/(front-end)/_features/user/ui/nickname'
import ProfileImage from 'src/app/(front-end)/_features/user/ui/profile-image'
import Tagname from 'src/app/(front-end)/_features/user/ui/tagname'

const Card: React.FC = () => {
	return (
		<Stack direction='row' gap={1} minWidth={290}>
			<ProfileImage />
			<Stack direction='column' width='100%'>
				<Stack direction='row' justifyContent='space-between'>
					<Stack direction='row' gap={1}>
						<Nickname />
						<Tagname />
					</Stack>
					<MoreHorizRounded />
				</Stack>
				<Typography>Content</Typography>
				<img
					src='https://picsum.photos/100/200'
					width={200}
					height={250}
					style={{ borderRadius: 8 }}
				/>
			</Stack>
		</Stack>
	)
}

export default Card
