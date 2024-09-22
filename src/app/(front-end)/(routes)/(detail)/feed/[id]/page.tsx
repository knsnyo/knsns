'use client'

import { gql, useQuery } from '@apollo/client'
import Shared from '../../../../__shared'
import Feature from '../../../../_features'

const query = gql`
	query {
		feed {
			content
			createdAt
		}
	}
`

const Page: React.FC = () => {
	const { data } = useQuery(query)

	return (
		<>
			<Shared.UI.AppBar />
			<Feature.Feed.UI.Card />
		</>
	)
}

export default Page
