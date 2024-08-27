export interface Infinite<T> {
	hasNext: boolean
	items: T[]
	lastId: string
}
