import { FileUploadOutlined } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import ActionButton from '../i-action-button'
import { IActionButtonImpl } from '../type'

const SharedButton: React.FC<IActionButtonImpl> = (props) => {
	const theme = useTheme()

	return (
		<ActionButton
			onClick={props.onClick}
			isSelected={props.isSelected}
			color={theme.palette.primary.main}
			selectIcon={FileUploadOutlined}
			unSelectIcon={FileUploadOutlined}
		/>
	)
}

export default SharedButton
