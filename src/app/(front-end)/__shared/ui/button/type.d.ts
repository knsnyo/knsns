import { ButtonProps } from '@mui/material'

export interface IButtonProps extends ButtonProps {
	text: string
	loading?: boolean
}
