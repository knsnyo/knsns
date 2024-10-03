'use client'

import { CircularProgress, Stack } from '@mui/material'
import React from 'react'
import { IInfiniteScrollProps } from './type'

export const InfiniteScroll: React.FC<IInfiniteScrollProps> = (props) => {
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
		if (end.current) {
			observer.observe(end.current)
		}

		return () => {
			if (end.current) {
				observer.unobserve(end.current)
			}
		}
	}, [props.data, props.hasNext])

	return (
		<Stack direction='column' alignItems='center'>
			{props.children}
			{props.hasNext && <div ref={end} />}
			{props.loading && <CircularProgress sx={{ margin: 5 }} />}
			{props.error && <div />}
		</Stack>
	)
}
