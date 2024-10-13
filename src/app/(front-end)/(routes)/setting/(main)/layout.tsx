import Shared from 'shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => (
	<>
		<Shared.UI.AppBar text='설정' back />
		{props.children}
	</>
)

export default Layout
