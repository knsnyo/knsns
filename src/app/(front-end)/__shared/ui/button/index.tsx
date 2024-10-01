import * as MUI from '@mui/material'
import type { IButtonProps } from './type'

export const Button: React.FC<IButtonProps> = ({ loading, text, ...props }) => {
	return (
		<MUI.Button
			{...props}
			sx={{ height: 30, fontWeight: 700 }}
			disabled={false}
		>
			{loading ? (
				<MUI.CircularProgress size={20} sx={{ color: 'white' }} />
			) : (
				text
			)}
		</MUI.Button>
	)
}
