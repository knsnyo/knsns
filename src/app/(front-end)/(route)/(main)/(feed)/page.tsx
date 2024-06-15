import config from 'src/_firebase/config'
import Feed from 'src/app/(front-end)/_features/Feed'

const Page: React.FC = () => {
	console.log(config)

	return <Feed.UI.Card />
}

export default Page
