import { CircularProgress, useTheme } from '@mui/material'

export const Indicator: React.FC = () => {
	const theme = useTheme()
	return <CircularProgress sx={{ color: theme.palette.divider }} />
}
