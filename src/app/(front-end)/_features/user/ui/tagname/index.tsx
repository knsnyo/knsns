import { Typography } from '@mui/material'

export const Tagname: React.FC<React.PropsWithChildren> = (props) => (
	<Typography color='grey'>@{props.children}</Typography>
)
