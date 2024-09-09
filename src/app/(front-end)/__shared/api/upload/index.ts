export const upload = async (
	e: React.ChangeEvent<HTMLInputElement>
): Promise<string | undefined> => {
	if (!e.target.files) return

	const formData = new FormData()

	Object.values(e.target.files).forEach((file) => {
		formData.append('file', file)
	})

	const response = await fetch('/api/upload', {
		method: 'POST',
		body: formData
	})

	const result = await response.json()

	if (!result.success) return

	return `/uploads/${result.name}`
}
