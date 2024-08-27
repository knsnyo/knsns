'use client'

import { Stack, TextField } from '@mui/material'
import React from 'react'
import Button from 'src/app/(front-end)/__shared/button'
import ProfileImage from 'src/app/(front-end)/_features/User/ui/profile-image'
import useLogic from 'src/app/(front-end)/_features/Write/ui/form/logic'

const Form: React.FC = () => {
	const { value, handler } = useLogic()

	return (
		<Stack padding={2}>
			<Stack direction='row' justifyContent='flex-end'>
				<Button text='글쓰기' onClick={handler.submit} />
			</Stack>
			<Stack direction='row' gap={1}>
				<ProfileImage />
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
		</Stack>
	)
}

export default Form
