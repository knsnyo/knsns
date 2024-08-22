'use client'

import { gql, useQuery } from '@apollo/client'
import { AppBar } from '@mui/material'
import Feature from 'src/app/(front-end)/_features'

const Page: React.FC = () => {
	const { data } = useQuery(gql`
		query {
			feed {
				content
			}
		}
	`)

	console.log(data)

	return (
		<>
			<AppBar />
			<Feature.Feed.UI.Card />
		</>
	)
}

export default Page
