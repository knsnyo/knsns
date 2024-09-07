'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, Typography } from '@mui/material'
import Shared from 'src/app/(front-end)/__shared'

import { BackgroundImage } from 'src/app/(front-end)/_features/User/ui/background-image'
import { CreatedAt } from 'src/app/(front-end)/_features/User/ui/created-at'
import useLogic from 'src/app/(front-end)/_features/User/ui/info/logic'
import { Intro } from 'src/app/(front-end)/_features/User/ui/intro'
import { Link } from 'src/app/(front-end)/_features/User/ui/link'
import { Nickname } from 'src/app/(front-end)/_features/User/ui/nickname'
import { ProfileImage } from 'src/app/(front-end)/_features/User/ui/profile-image'
import { Tagname } from 'src/app/(front-end)/_features/User/ui/tagname'

export const Info: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack>
			<Stack>
				<BackgroundImage />
				<Stack
					direction='row'
					justifyContent='space-between'
					paddingX={3}
					position='relative'
					height={60}
					alignItems='end'
				>
					<ProfileImage src={value.user?.photoUrl ?? undefined} />
					<Shared.UI.Button
						text='프로필 수정'
						variant='contained'
						onClick={handler.go}
					/>
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
					{value.user?.createdAt && <CreatedAt>1999.09.09</CreatedAt>}
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
