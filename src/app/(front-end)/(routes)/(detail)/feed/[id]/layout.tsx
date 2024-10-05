import Shared from 'shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => (
	<>
		<Shared.UI.AppBar back />
		{props.children}
	</>
)

export default Layout
