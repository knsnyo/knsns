import { CelebrationRounded } from '@mui/icons-material'
import Shared from 'shared'

export const Birthday: React.FC = () => {
	return (
		<Shared.UI.IconText text='생일: 1999.08.29' icon={<CelebrationRounded />} />
	)
}
