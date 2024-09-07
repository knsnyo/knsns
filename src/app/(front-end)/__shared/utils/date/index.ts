import dayjs from 'dayjs'

export const yyyyMMdd = (date: Date) => {
	const day = dayjs(date)
	const yyyy = day.year()
	const mm = day.month() >= 10 ? day.month() : `0${day.month()}`
	const dd = day.date() >= 10 ? day.date() : `0${day.date()}`

	return `${yyyy}.${mm}.${dd}`
}
