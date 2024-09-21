'use client'

import Shared from '../../../__shared'
import Feature from '../../../_features'

const Page: React.FC = () => {
	return (
		<Shared.UI.InfiniteScroll
			data={[]}
			loading={true || 1}
			error={false}
			hasNext={true || 1}
			refetch={() => {}}
		>
			<Feature.Write.UI.FAB />
		</Shared.UI.InfiniteScroll>
	)
}

export default Page
