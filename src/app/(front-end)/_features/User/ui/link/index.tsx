import { LinkRounded } from '@mui/icons-material'
import { blue } from '@mui/material/colors'
import Shared from 'shared'

export const Link: React.FC<React.PropsWithChildren> = (props) => (
	<Shared.UI.IconText
		text={typeof props.children !== 'undefined' ? props.children : ''}
		icon={<LinkRounded sx={{ color: blue[500] }} />}
		textColor={blue[500]}
	/>
)
