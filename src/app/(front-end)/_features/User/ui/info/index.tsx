'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, Typography } from '@mui/material'
import Shared from '../../../../__shared'
import { BackgroundImage } from '../background-image'
import { CreatedAt } from '../created-at'
import { Intro } from '../intro'
import { Link } from '../link'
import { Nickname } from '../nickname'
import { ProfileImage } from '../profile-image'
import { Tagname } from '../tagname'
import useLogic from './logic'

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
					{value.isMy && (
						<Shared.UI.Button
							text='프로필 수정'
							variant='contained'
							onClick={handler.go}
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
					{value.user?.link && <Link>{value.user?.link}</Link>}
					{/* <Birthday /> */}
					{value.user?.createdAt && (
						<CreatedAt>{Shared.Utils.yyyyMMdd(value.user.createdAt)}</CreatedAt>
					)}
				</Stack>
				<br />
				<Stack direction='row' gap={2}>
					<Typography>
						<b>60</b> 팔로우 중
					</Typography>
					<Typography>
						<b>60</b> 팔로워
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	)
}
