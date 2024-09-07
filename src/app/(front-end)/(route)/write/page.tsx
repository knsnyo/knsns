'use client'

import Shared from 'src/app/(front-end)/__shared'
import Feature from 'src/app/(front-end)/_features'

const Page: React.FC = (props) => {
	return (
		<>
			<Shared.UI.AppBar text='글쓰기' />
			<Feature.Write.UI.Form />
		</>
	)
}

export default Page
