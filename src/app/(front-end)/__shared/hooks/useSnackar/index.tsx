import { SnackbarProps } from '@mui/material'
import React from 'react'
import { SnackBar } from '../../ui/snackbar'

export const useSnackbar = (props: SnackbarProps) => {
	const [open, setOpen] = React.useState<boolean>(false)

	const onClose = () => setOpen(false)

	return {
		snackbar: open
			? () => (
					<SnackBar
						{...props}
						anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
						autoHideDuration={3000}
						open={open}
						onClose={onClose}
					/>
				)
			: () => <></>,
		open: () => {
			console.log('sibal')
			setOpen(true)
		}
	}
}
