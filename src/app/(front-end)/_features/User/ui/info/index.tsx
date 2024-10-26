'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, Typography } from '@mui/material'
import NextLink from 'next/link'
import Shared from 'shared'
import { BackgroundImage } from '../background-image'
import { CreatedAt } from '../created-at'
import { Intro } from '../intro'
import { Link } from '../link'
import { Nickname } from '../nickname'
import { ProfileImage } from '../profile-image'
import { Tagname } from '../tagname'
import { useLogic } from './logic'

export const Info: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack>
			<Stack>
				<BackgroundImage src={value.user?.backgroundImage ?? undefined} />
				<Stack
					direction='row'
					justifyContent='space-between'
					paddingX={3}
					position='relative'
					height={50}
					alignItems='end'
				>
					<ProfileImage src={value.user?.photoUrl ?? undefined} />
					{value.isMy ? (
						<Shared.UI.Button text='프로필 수정' variant='contained' onClick={handler.nav.go} />
					) : (
						<Shared.UI.Button
							text={
								(value.user?.follower?.map((f) => f.followedUserId) ?? []).includes(value.my)
									? '언팔로우'
									: '팔로우'
							}
							variant='contained'
							onClick={handler.follow}
						/>
					)}
				</Stack>
			</Stack>
			<br />
			<Stack paddingX={3}>
				<Nickname>{value.user?.displayName}</Nickname>
				<Tagname>{value.user?.tagname}</Tagname>
				<br />
				<Intro>{value.user?.intro}</Intro>
				<br />
				<Stack direction='row' gap={2} flexWrap='wrap'>
					{value.user?.link && (
						<Link>
							<NextLink
								style={{ textDecoration: 'none', color: 'inherit' }}
								target='_blank'
								href={value.user?.link}
							>
								{value.user?.link}
							</NextLink>
						</Link>
					)}
					{/* <Birthday /> */}
					{value.user?.createdAt && (
						<CreatedAt>{Shared.Utils.yyyyMMdd(value.user.createdAt)}</CreatedAt>
					)}
				</Stack>
				<br />
				<Stack direction='row' gap={2} onClick={handler.nav.follow}>
					<Typography>
						<b>{(value.user?.followed ?? []).length}</b> 팔로우 중
					</Typography>
					<Typography>
						<b>{(value.user?.follower ?? []).length}</b> 팔로워
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	)
}
