import { CalendarMonthRounded } from '@mui/icons-material'
import Shared from 'shared'

export const CreatedAt: React.FC<React.PropsWithChildren> = (props) => (
	<Shared.UI.IconText
		text={
			typeof props.children === 'string' ? `가입일자: ${props.children}` : ''
		}
		icon={<CalendarMonthRounded />}
	/>
)
