'use client'

import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Stack, Typography, useTheme } from '@mui/material'
import useLogic from './logic'
import { ILikeButton } from './type'

const LikeButton: React.FC<ILikeButton> = (props) => {
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
				bgcolor={value.isHover ? `${props.color}1A` : undefined}
				borderRadius='50%'
				padding={1}
				marginLeft={-1}
			>
				{props.isSelected ? (
					<Favorite sx={{ color: props.color }} />
				) : (
					<FavoriteBorder
						sx={{
							color: value.isHover ? `${props.color}BF` : theme.palette.divider,
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
					color: value.isHover ? `${props.color}BF` : theme.palette.divider,
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

export default LikeButton
