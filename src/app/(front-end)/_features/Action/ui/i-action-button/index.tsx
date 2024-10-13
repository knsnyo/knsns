'use client'

import { Stack, Typography, useTheme } from '@mui/material'
import { useLogic } from './logic'
import { IActionButton } from './type'

export const ActionButton: React.FC<IActionButton> = (props) => {
	const theme = useTheme()
	const { value } = useLogic()

	return (
		<Stack
			direction='row'
			alignItems='center'
			gap={1}
			ref={value.hoverRef}
			onClick={props.onClick}
		>
			<Stack
				sx={{
					transition: theme.transitions.create(
						['background-color', 'transform'],
						{
							duration: theme.transitions.duration.short
						}
					)
				}}
				bgcolor={value.isHover ? `${props.color}80` : undefined}
				borderRadius='50%'
				padding={1}
				marginLeft={-1}
			>
				{props.isSelected ? (
					<props.selectIcon sx={{ color: props.color }} />
				) : (
					<props.unSelectIcon
						sx={{
							color: value.isHover ? `${props.color}FF` : theme.palette.divider,
							transition: theme.transitions.create(['color', 'transform'], {
								duration: theme.transitions.duration.short
							})
						}}
					/>
				)}
			</Stack>
			<Typography
				marginLeft={-1}
				sx={{
					color: value.isHover ? `${props.color}FF` : theme.palette.divider,
					transition: theme.transitions.create(['color', 'transform'], {
						duration: theme.transitions.duration.short
					})
				}}
				fontWeight={700}
			>
				{props.text}
			</Typography>
		</Stack>
	)
}
