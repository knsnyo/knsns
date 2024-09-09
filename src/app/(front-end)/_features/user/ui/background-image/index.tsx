import { Image } from '@mui/icons-material'
import { Box } from '@mui/material'

export const BackgroundImage: React.FC<
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
> = (props) => {
	if (!props?.src) {
		return (
			<Box
				width='100%'
				sx={{ aspectRatio: 3 }}
				display='flex'
				justifyContent='center'
				alignItems='center'
				borderBottom='1px solid #e4e4e4'
			>
				<Image sx={{ fontSize: 40 }} color='disabled' />
			</Box>
		)
	}

	return <img src={props.src} width='100%' alt='' style={{ aspectRatio: 3 }} />
}
