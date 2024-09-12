export const INDEX_MAP = {
	home: 0,
	search: 1,
	alarm: 2,
	my: 3
}

export type BOTTOM_NAV_URL = '/' | '/search' | '/alarm' | '/my'

export const URL_MAP: Record<BOTTOM_NAV_URL, number> = {
	'/': INDEX_MAP.home,
	'/search': INDEX_MAP.search,
	'/alarm': INDEX_MAP.alarm,
	'/my': INDEX_MAP.my
}
