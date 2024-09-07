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
				<Image sx={{ fontSize: 40 }} color='disabled' />
			</MUI.Avatar>
		)
	}

	return <MUI.Avatar src='https://picsum.photos/200' />
}
