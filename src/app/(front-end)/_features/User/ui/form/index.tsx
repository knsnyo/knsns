'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Stack, TextField } from '@mui/material'
import Shared from 'shared'
import { BackgroundImage } from '../background-image'
import { ProfileImage } from '../profile-image'
import useLogic from './logic'

export const Form: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack>
			<Stack>
				<label htmlFor='background-image'>
					<BackgroundImage src={value.user?.backgroundImage ?? undefined} />
					<input
						type='file'
						id='background-image'
						name='backgroundImage'
						accept='image/*'
						style={{ display: 'none' }}
						onChange={handler.image}
					/>
				</label>
				<Stack
					direction='row'
					justifyContent='space-between'
					paddingX={3}
					position='relative'
					height={50}
					alignItems='end'
				>
					<label htmlFor='photo-url'>
						<ProfileImage src={value.user?.photoUrl ?? undefined} />
						<input
							type='file'
							id='photo-url'
							name='photoUrl'
							accept='image/*'
							style={{ display: 'none' }}
							onChange={handler.image}
						/>
					</label>
					<Shared.UI.Button
						variant='contained'
						text='수정하기'
						disabled={!value.isValid}
						onClick={handler.submit}
						loading={value.loading}
					/>
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
