import { Image } from '@mui/icons-material'
import { Box } from '@mui/material'

export const ProfileImage: React.FC<
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
> = (props) => {
	if (!props.src) {
		return (
			<Box
				width={100}
				height={100}
				display='flex'
				justifyContent='center'
				alignItems='center'
				border='1px solid #d4d4d4'
				borderRadius='100%'
				bgcolor='white'
			>
				<Image sx={{ fontSize: 40 }} color='disabled' />
			</Box>
		)
	}

	return (
		<img
			src={props.src}
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
	)
}
