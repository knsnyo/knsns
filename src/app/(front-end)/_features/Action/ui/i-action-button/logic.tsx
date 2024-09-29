'use client'

import React from 'react'

const useLogic = () => {
	const hoverRef = React.useRef<HTMLDivElement>(null)
	const [isHover, setIsHover] = React.useState<boolean>(false)

	React.useEffect(() => {
		const mouseEnter = () => {
			setIsHover(true)
		}
		const mouseLeave = () => {
			setIsHover(false)
		}

		const ref = hoverRef.current

		if (!ref) return

		ref.addEventListener('mouseenter', mouseEnter)
		ref.addEventListener('mouseleave', mouseLeave)

		return () => {
			ref.removeEventListener('mouseenter', mouseEnter)
			ref.removeEventListener('mouseleave', mouseLeave)
		}
	}, [])

	return { value: { hoverRef, isHover } }
}

export default useLogic
