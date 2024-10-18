import React from 'react'

export const useInput = (
	init?: string
): [string, React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>] => {
	const [value, setValue] = React.useState<string>(init ?? '')

	const handleValue: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
		setValue(e.target.value)
	}

	return [value, handleValue]
}
