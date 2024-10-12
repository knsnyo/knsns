'use client'

import { UploadFile } from '@mui/icons-material'
import { Box, Stack, TextField } from '@mui/material'
import React from 'react'
import Shared from 'shared'
import { User } from '../../../User'
import { useLogic } from './logic'

export const Form: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack padding={2}>
			<Stack direction='row' justifyContent='flex-end'>
				<Shared.UI.Button text='글쓰기' onClick={handler.submit} />
			</Stack>
			<Stack direction='row' gap={1}>
				<User.UI.Avatar src={value?.user?.photoUrl ?? undefined} />
				<TextField
					variant='standard'
					fullWidth
					placeholder='아무리 우겨봐도 어쩔 수 없네. 저기 개똥 무덤이 내집인걸.'
					multiline
					value={value.content}
					onChange={handler.content}
					InputProps={{ disableUnderline: true }}
				/>
			</Stack>
			<label htmlFor='write-image'>
				{value.image !== '' ? (
					<Box padding={5}>
						<img src={value.image} width='100%' alt='write-image' />
					</Box>
				) : (
					<Box
						width='100vw'
						maxWidth='100%'
						display='flex'
						justifyContent='center'
						alignItems='center'
						height={100}
					>
						<UploadFile />
					</Box>
				)}
				<input
					type='file'
					id='write-image'
					name='image'
					accept='image/*'
					style={{ display: 'none' }}
					onChange={handler.image}
				/>
			</label>
		</Stack>
	)
}
