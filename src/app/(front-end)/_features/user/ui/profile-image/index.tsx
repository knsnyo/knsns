import { Image } from '@mui/icons-material'
import { Avatar } from '@mui/material'

export const ProfileImage: React.FC<
	React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
> = (props) => {
	if (!props?.src) {
		return (
			<Avatar>
				<Image sx={{ fontSize: 40 }} />
			</Avatar>
		)
	}

	return <Avatar src='https://picsum.photos/200' />
}
