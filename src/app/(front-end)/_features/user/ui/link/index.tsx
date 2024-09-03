import { LinkRounded } from '@mui/icons-material'
import Shared from 'src/app/(front-end)/__shared'

export const Link: React.FC = () => {
	return (
		<Shared.UI.IconText
			text='https://velog.io/@knsnyo'
			icon={<LinkRounded />}
		/>
	)
}
