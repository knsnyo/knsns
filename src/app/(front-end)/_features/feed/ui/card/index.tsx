'use client'

import { MoreHorizRounded } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'

import { Action, User } from 'features'
import { useLogic } from './logic'
import { IFeedCardProps } from './type'

export const Card: React.FC<IFeedCardProps> = ({ feed }) => {
	const { value, handler } = useLogic(feed)

	return (
		<Stack direction='row' gap={1} padding={2} maxWidth={600} width='100%'>
			<Box onClick={handler.nav.profile}>
				<User.UI.Avatar src={feed.author.photoUrl ?? undefined} />
			</Box>
			<Stack flex={1} direction='column'>
				<Stack direction='row' justifyContent='space-between'>
					<Stack direction='row' onClick={handler.nav.profile}>
						<User.UI.Nickname>{feed.author.displayName}</User.UI.Nickname>
						<User.UI.Tagname>{feed.author.tagname}</User.UI.Tagname>
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
						onClick={handler.like}
						isSelected={value.like}
						text={feed.action?.likeUserId?.length ?? 0}
					/>
					<Stack direction='row' gap={1}>
						<Action.UI.SaveFeedButton
							onClick={handler.save}
							isSelected={value.save}
							text={feed.action?.saveUserId?.length ?? 0}
						/>
						<Action.UI.SharedButton isSelected={false} onClick={() => {}} />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}
