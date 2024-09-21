import { MoreHorizRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { Avatar } from '../../../User/ui/avatar'
import { Nickname } from '../../../User/ui/nickname'
import { Tagname } from '../../../User/ui/tagname'

export const Card: React.FC = () => {
	return (
		<Stack direction='row' gap={1} minWidth={290}>
			<Avatar />
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
