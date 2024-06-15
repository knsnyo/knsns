const withHoverColor = (Component: React.ComponentType) => {
	const Container = () => {
		return <Component />
	}

	return Container
}

export default withHoverColor
