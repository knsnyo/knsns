import Shared from 'src/app/(front-end)/__shared'
import Feature from 'src/app/(front-end)/_features'

const Page: React.FC = () => {
	return (
		<>
			<Shared.UI.AppBar />
			<Feature.Write.UI.FAB />
		</>
	)
}

export default Page
