import { Typography } from '@mui/material'

export const Tagname: React.FC<React.PropsWithChildren> = (props) => {
	return <Typography color='grey'>@{props.children}</Typography>
}
