'use client'

import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { ActionButton } from '../i-action-button'
import { IActionButtonImpl } from '../type'

export const LikeButton: React.FC<IActionButtonImpl> = (props) => {
	const theme = useTheme()

	return (
		<ActionButton
			onClick={props.onClick}
			isSelected={props.isSelected}
			color={theme.palette.error.main}
			text={props.text}
			selectIcon={Favorite}
			unSelectIcon={FavoriteBorder}
		/>
	)
}
