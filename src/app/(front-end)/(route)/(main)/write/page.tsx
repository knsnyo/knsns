import AppBar from 'src/app/(front-end)/__shared/appbar'
import WriteForm from 'src/app/(front-end)/_features/Write/ui/form'

const Page: React.FC = (props) => {
	return (
		<>
			<AppBar text='글쓰기' />
			<WriteForm />
		</>
	)
}

export default Page
