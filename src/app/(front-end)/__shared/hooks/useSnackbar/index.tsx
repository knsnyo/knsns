import { Slide, SlideProps, Snackbar, SnackbarProps } from '@mui/material'
import React from 'react'

export const useSnackbar = (props: SnackbarProps) => {
	const [open, setOpen] = React.useState<boolean>(false)

	const onClose = () => setOpen(false)

	return {
		snackbar: open
			? () => (
					<Snackbar
						{...props}
						anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
						autoHideDuration={3000}
						open={open}
						onClose={onClose}
						TransitionComponent={SlideTransition}
						ContentProps={{
							...props.ContentProps,
							sx: {
								...props.ContentProps?.sx,
								fontWeight: 700
							}
						}}
					/>
				)
			: () => <></>,
		open: () => setOpen(true)
	}
}

const SlideTransition = (props: SlideProps) => <Slide {...props} direction='down' />
