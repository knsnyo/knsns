import { Feed } from '@prisma/client'
import React from 'react'

const useLogic = () => {
	// const init = useQuery()
	const [feeds, setFeeds] = React.useState<Feed[]>([])

	return { value: {}, handler: {} }
}

export default useLogic
