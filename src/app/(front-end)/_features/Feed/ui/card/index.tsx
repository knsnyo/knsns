import { MoreHorizRounded } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { Avatar } from '../../../User/ui/avatar'
import { Nickname } from '../../../User/ui/nickname'
import { Tagname } from '../../../User/ui/tagname'
import { IFeedCardProps } from './type'

export const Card: React.FC<IFeedCardProps> = ({ feed }) => {
	return (
		<Stack direction='row' gap={1} padding={2} maxWidth={600}>
			<Avatar src={feed.author.photoUrl ?? undefined} />
			<Stack direction='column' width='100%'>
				<Stack direction='row' justifyContent='space-between'>
					<Stack direction='row' gap={1}>
						<Nickname>{feed.author.displayName}</Nickname>
						<Tagname>{feed.author.tagname}</Tagname>
					</Stack>
					<MoreHorizRounded />
				</Stack>
				<Typography>{feed.content}</Typography>
				{feed.image && (
					<img
						alt=''
						src={feed.image}
						style={{ borderRadius: 8, width: '80vw', maxWidth: '100%' }}
					/>
				)}
			</Stack>
		</Stack>
	)
}
