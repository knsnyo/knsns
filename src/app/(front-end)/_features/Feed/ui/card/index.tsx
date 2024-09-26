import { MoreHorizRounded } from '@mui/icons-material'
import { Stack, Typography, useTheme } from '@mui/material'
import { Action } from '../../../Action'
import { Avatar } from '../../../User/ui/avatar'
import { Nickname } from '../../../User/ui/nickname'
import { Tagname } from '../../../User/ui/tagname'
import { IFeedCardProps } from './type'

export const Card: React.FC<IFeedCardProps> = ({ feed }) => {
	const theme = useTheme()
	return (
		<Stack direction='row' gap={1} padding={2} maxWidth={600} width='100%'>
			<Avatar src={feed.author.photoUrl ?? undefined} />
			<Stack flex={1} direction='column'>
				<Stack direction='row' justifyContent='space-between'>
					<Stack direction='row'>
						<Nickname>{feed.author.displayName}</Nickname>
						<Tagname>{feed.author.tagname}</Tagname>
					</Stack>
					<MoreHorizRounded />
				</Stack>
				<Typography>{feed.content}</Typography>
				{feed.image && (
					<img
						alt='feed-image'
						src={feed.image}
						style={{ borderRadius: 8, width: '80vw', maxWidth: '100%' }}
					/>
				)}
				<Stack direction='row' justifyContent='space-between' paddingY={1}>
					<Action.UI.LikeButton
						isSelected
						color={theme.palette.error.main}
						text={1}
					/>
					<Action.UI.LikeButton
						isSelected={false}
						color={theme.palette.error.main}
						text={2}
					/>
				</Stack>
			</Stack>
		</Stack>
	)
}
