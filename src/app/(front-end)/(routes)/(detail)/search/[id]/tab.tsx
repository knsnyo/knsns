import { Box } from '@mui/material'
import { Feed, Search, User } from 'features'
import { usePathname, useRouter } from 'next/navigation'
import Shared from 'shared'
import { TFeedWithAuthor, TUserWithFollow } from 'type/convolution'

export const SearchRecentFeedTab: React.FC = () => {
	const keyword = usePathname().split('/').pop()!
	const { loading, error, data, fetch } = Search.api.useGetSearchRecentFeeds({
		keyword: decodeURI(keyword)
	})
	const router = useRouter()
	const detail = (id: string) => () => router.push(`/feed/${id}`)

	return (
		<Shared.UI.InfiniteScroll
			loading={loading}
			error={false}
			data={data?.feeds.items ?? []}
			hasNext={data?.feeds.hasNext ?? false}
			refetch={fetch}
		>
			{data?.feeds.items.map((feed: TFeedWithAuthor) => (
				<Box key={feed.id} onClick={detail(feed.id)} width='100%'>
					<Feed.UI.Card feed={feed} />
				</Box>
			))}
		</Shared.UI.InfiniteScroll>
	)
}

export const SearchUserTab: React.FC = () => {
	const nickname = usePathname().split('/').pop()!
	const { loading, error, data, fetch } = Search.api.useGetSearchUsers({
		nickname: decodeURI(nickname)
	})
	const router = useRouter()
	const detail = (id: string) => () => router.push(`/user/${id}`)

	return (
		<Shared.UI.InfiniteScroll
			loading={loading}
			error={false}
			data={data?.users.items ?? []}
			hasNext={data?.users.hasNext ?? false}
			refetch={fetch}
		>
			{data?.users.items.map((user: TUserWithFollow) => (
				<Box key={user.id} onClick={detail(user.id)} width='100%'>
					<User.UI.Card user={user} />
				</Box>
			))}
		</Shared.UI.InfiniteScroll>
	)
}
