const baseUrl = `http://localhost:7469`

/**
 * url startsWith /
 * @param url string
 * @returns
 */
export const shareUrl = (url: string) => window.navigator.clipboard.writeText(`${baseUrl}${url}`)
