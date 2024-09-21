export interface IInfiniteScrollProps extends React.PropsWithChildren {
	loading: boolean
	hasNext: boolean
	error: boolean
	data: T[]
	refetch: () => void
}
