import { Stack, Typography } from '@mui/material'
import withHoverColor from 'src/app/(front-end)/__shared/_style/hoc/withHoverColor'
import { IIconTextProps } from 'src/app/(front-end)/__shared/icon-text/type'

const IconText: React.FC<IIconTextProps> = (props) => {
	const icon = props.hoverColor ? withHoverColor(props.icon) : props.icon
	const text = props.hoverColor ? (
		<Typography>{props.text}</Typography>
	) : (
		<Typography>{props.text}</Typography>
	)

	return (
		<Stack direction='row' gap={1}>
			{icon}
			{text}
		</Stack>
	)
}

export default IconText
