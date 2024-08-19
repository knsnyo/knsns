import * as MUI from '@mui/material'
import { IButtonProps } from 'src/app/(front-end)/__shared/button/type'

const Button: React.FC<IButtonProps> = (props) => {
	return (
		<MUI.Button sx={{ height: 30 }} onClick={props.onClick}>
			{props.text}
		</MUI.Button>
	)
}

export default Button
