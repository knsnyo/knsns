import * as MUI from '@mui/material'
import type { IButtonProps } from 'src/app/(front-end)/__shared/button/type'

export const Button: React.FC<IButtonProps> = (props) => {
	return (
		<MUI.Button sx={{ height: 30 }} onClick={props.onClick}>
			{props.text}
		</MUI.Button>
	)
}
