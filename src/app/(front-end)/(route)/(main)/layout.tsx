import Shared from 'src/app/(front-end)/__shared'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return <Shared.UI.Container>{props.children}</Shared.UI.Container>
}

export default Layout
