import * as MUI from '@mui/material'
import type { IButtonProps } from './type'

export const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
	return (
		<MUI.Button {...props} sx={{ height: 30, fontWeight: 700 }}>
			{text}
		</MUI.Button>
	)
}
