'use client'

import { gql, useQuery } from '@apollo/client'
import Shared from '../../../../../__shared'
import Feature from '../../../../../_features'

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
