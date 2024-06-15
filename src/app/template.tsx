'use client'

import { ILayoutProps } from 'src/_type/layout'
import Shared from 'src/app/(front-end)/__shared'

const Template: React.FC<ILayoutProps> = (props) => {
	return props.children
}

export default Shared.HOC.withAuthRouting(Template)
