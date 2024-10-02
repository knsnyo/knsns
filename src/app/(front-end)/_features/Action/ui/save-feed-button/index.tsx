'use client'

import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { ActionButton } from '../i-action-button'
import { IActionButtonImpl } from '../type'

export const SaveFeedButton: React.FC<IActionButtonImpl> = (props) => {
	const theme = useTheme()

	return (
		<ActionButton
			onClick={props.onClick}
			isSelected={props.isSelected}
			color={theme.palette.success.main}
			selectIcon={Bookmark}
			unSelectIcon={BookmarkBorder}
		/>
	)
}
