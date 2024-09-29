export interface IActionButton {
	color: string
	text?: string | number
	isSelected: boolean
	onClick: React.MouseEventHandler
	selectIcon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
		muiName: string
	}
	unSelectIcon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
		muiName: string
	}
}
