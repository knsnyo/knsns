'use client'

import { CircularProgress, Stack } from '@mui/material'
import React from 'react'
import { IInfiniteScrollProps } from './type'

const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {
	const end = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]

				if (firstEntry.isIntersecting && props.hasNext) {
					props.refetch()
				}
			},
			{ threshold: 1 }
		)

		return () => {
			if (!end.current) return
			observer.unobserve(end.current)
		}
	}, [])

	return (
		<Stack direction='column' alignItems='center'>
			{props.children}
			{props.hasNext && <div ref={end} />}
			{props.hasNext && props.loading && (
				<CircularProgress sx={{ margin: 5 }} />
			)}
			{props.error && <div />}
		</Stack>
	)
}

export default InfiniteScroll
