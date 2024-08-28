'use client'

import { gql, useQuery } from '@apollo/client'
import Shared from 'src/app/(front-end)/__shared'
import Feature from 'src/app/(front-end)/_features'

const Page: React.FC = () => {
	const { data } = useQuery(gql`
		query {
			feed {
				content
				createdAt
			}
		}
	`)

	return (
		<>
			<Shared.UI.AppBar />
			<Feature.Feed.UI.Card />
		</>
	)
}

export default Page
