import { Image } from '@mui/icons-material'
import * as MUI from '@mui/material'

export const Avatar: React.FC<
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
> = (props) => {
	if (!props?.src) {
		return (
			<MUI.Avatar>
				<Image sx={{ fontSize: 20 }} color='disabled' />
			</MUI.Avatar>
		)
	}

	return <MUI.Avatar src={props.src} />
}
