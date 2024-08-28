import React from 'react'

export const useInput = (): [
	string,
	React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
] => {
	const [value, setValue] = React.useState<string>('')

	const handleValue: React.ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = (e) => {
		setValue(e.target.value)
	}

	return [value, handleValue]
}
