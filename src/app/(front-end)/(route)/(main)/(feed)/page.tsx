import { EditRounded } from '@mui/icons-material'
import { Fab } from '@mui/material'
import AppBar from 'src/app/(front-end)/__shared/appbar'

const Page: React.FC = () => {
	return (
		<>
			<AppBar />
			<Fab size='small' sx={{ position: 'absolute', bottom: 16, right: 16 }}>
				<EditRounded />
			</Fab>
		</>
	)
}

export default Page
