import Shared from 'shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => (
	<>
		<Shared.UI.AppBar back text='팔로잉' />
		{props.children}
	</>
)

export default Layout
