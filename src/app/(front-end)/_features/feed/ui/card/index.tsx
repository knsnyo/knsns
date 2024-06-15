import { MoreHorizRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import Nickname from 'src/app/(front-end)/_features/User/ui/nickname'
import ProfileImage from 'src/app/(front-end)/_features/User/ui/profile-image'
import Tagname from 'src/app/(front-end)/_features/User/ui/tagname'

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
					alt=''
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
