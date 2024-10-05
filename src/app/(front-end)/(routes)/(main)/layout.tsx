import Shared from 'shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => (
	<>
		{props.children}
		<Shared.UI.BottomNavigation />
	</>
)

export default Layout
