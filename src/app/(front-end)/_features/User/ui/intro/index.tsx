import { Typography } from '@mui/material'

export const Intro: React.FC<React.PropsWithChildren> = (props) => {
	return <Typography>{props.children}</Typography>
}
