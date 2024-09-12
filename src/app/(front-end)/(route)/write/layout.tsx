import Shared from '../../__shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<Shared.UI.Container>
			<Shared.UI.AppBar text='글쓰기' back />
			{props.children}
		</Shared.UI.Container>
	)
}

export default Layout
