'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stack, TextField } from '@mui/material'
import Shared from 'src/app/(front-end)/__shared'
import { BackgroundImage } from 'src/app/(front-end)/_features/User/ui/background-image'
import useLogic from 'src/app/(front-end)/_features/User/ui/form/logic'
import { ProfileImage } from 'src/app/(front-end)/_features/User/ui/profile-image'

export const Form: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack>
			<Stack>
				<BackgroundImage src={value.user?.backgroundImage ?? ''} />
				<Stack
					direction='row'
					justifyContent='space-between'
					paddingX={3}
					position='relative'
					height={60}
					alignItems='end'
				>
					<ProfileImage src={value.user?.photoUrl ?? undefined} />
					<Shared.UI.Button variant='contained' text='수정하기' />
				</Stack>
			</Stack>
			<br />
			<Stack paddingX={3} gap={1}>
				<TextField
					variant='standard'
					InputLabelProps={{ shrink: true }}
					label='nickname'
					placeholder='your nickname'
					value={value.user?.displayName}
					name='displayName'
					onChange={handler.form}
				/>
				<TextField
					variant='standard'
					InputLabelProps={{ shrink: true }}
					label='@tagname'
					placeholder='your @tagname'
					value={value.user?.tagname}
					name='tagname'
					onChange={handler.form}
				/>
				<TextField
					variant='standard'
					InputLabelProps={{ shrink: true }}
					label='intro'
					placeholder='your intro'
					value={value.user?.intro}
					name='intro'
					onChange={handler.form}
				/>
				<TextField
					variant='standard'
					InputLabelProps={{ shrink: true }}
					label='link'
					placeholder='your link'
					value={value.user?.link}
					name='link'
					onChange={handler.form}
				/>
			</Stack>
		</Stack>
	)
}
