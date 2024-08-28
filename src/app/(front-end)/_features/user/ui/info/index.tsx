/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, Typography } from '@mui/material'
import Shared from 'src/app/(front-end)/__shared'

import { BackgroundImage } from 'src/app/(front-end)/_features/User/ui/background-image'
import { Birthday } from 'src/app/(front-end)/_features/User/ui/birthday'
import { CreatedAt } from 'src/app/(front-end)/_features/User/ui/created-at'
import { Intro } from 'src/app/(front-end)/_features/User/ui/intro'
import { Link } from 'src/app/(front-end)/_features/User/ui/link'
import { Nickname } from 'src/app/(front-end)/_features/User/ui/nickname'
import { Tagname } from 'src/app/(front-end)/_features/User/ui/tagname'

export const Info: React.FC = () => {
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
					<img
						src='https://picsum.photos/300'
						alt=''
						width={100}
						height={100}
						style={{
							zIndex: 2,
							borderRadius: 100,
							position: 'relative',
							bottom: 10
						}}
					/>
					<Shared.UI.Button text='프로필 수정' />
				</Stack>
			</Stack>
			<br />
			<Nickname />
			<Tagname />
			<br />
			<Intro />
			<Stack direction='row' gap={2}>
				<Link />
				<Birthday />
				<CreatedAt />
			</Stack>
			<Stack direction='row' gap={2}>
				<Typography>
					<b>60</b> 팔로우 중
				</Typography>
				<Typography>
					<b>60</b> 팔로워
				</Typography>
			</Stack>
		</Stack>
	)
}
