import Shared from 'shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
			<Shared.UI.AppBar back text='팔로잉' />
			{props.children}
		</>
	)
}

export default Layout
