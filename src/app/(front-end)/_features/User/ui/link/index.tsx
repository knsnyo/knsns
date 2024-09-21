import { LinkRounded } from '@mui/icons-material'
import Shared from '../../../../__shared'

export const Link: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<Shared.UI.IconText
			text={typeof props.children === 'string' ? props.children : ''}
			icon={<LinkRounded />}
		/>
	)
}
