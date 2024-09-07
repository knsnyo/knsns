import { CalendarMonthRounded } from '@mui/icons-material'
import Shared from 'src/app/(front-end)/__shared'

export const CreatedAt: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<Shared.UI.IconText
			text={
				typeof props.children === 'string' ? `가입일자: ${props.children}` : ''
			}
			icon={<CalendarMonthRounded />}
		/>
	)
}
