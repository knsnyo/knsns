import { CalendarMonthRounded } from '@mui/icons-material'
import Shared from 'src/app/(front-end)/__shared'

export const CreatedAt: React.FC = () => {
	return (
		<Shared.UI.IconText
			text='가입일자: 1999.08.29'
			icon={<CalendarMonthRounded />}
		/>
	)
}
