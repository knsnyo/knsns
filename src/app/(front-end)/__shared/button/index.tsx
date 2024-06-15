import { Button as MuiButton } from '@mui/material'
import { IButtonProps } from 'src/app/(front-end)/__shared/button/type'

const Button: React.FC<IButtonProps> = (props) => {
	return <MuiButton sx={{ height: 30 }}>{props.text}</MuiButton>
}

export default Button
