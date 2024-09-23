import Shared from '../../../__shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
			<Shared.UI.AppBar back />
			{props.children}
		</>
	)
}

export default Layout
