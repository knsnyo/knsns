import Shared from 'src/app/(front-end)/__shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
			<Shared.UI.AppBar />
			{props.children}
			<Shared.UI.BottomNavigation />
		</>
	)
}

export default Layout
