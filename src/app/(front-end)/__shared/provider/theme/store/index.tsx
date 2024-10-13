import { TColor, THandleMode, TMode } from 'type/theme'

const THEME_MODE = 'trash-theme-mode'
const THEME_COLOR = 'trash-theme-color'

export const createThemeStore = () => {
	let state: { mode: TMode; color: TColor } = {
		mode: (window.localStorage.getItem(THEME_MODE) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light')) as TMode,
		color: (window.localStorage.getItem(THEME_COLOR) ?? 'purple') as TColor
	}

	const listeners = new Set<() => void>()

	const getState = () => state

	const emitChange = () => {
		for (const listener of listeners) {
			listener()
		}
	}

	const setMode = (mode: THandleMode) => {
		let value = mode
		switch (mode) {
			case 'system':
				value = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'

				break
			default:
				break
		}
		state = {
			...state,
			mode: value as TMode
		}

		window.localStorage.setItem(THEME_MODE, value)
		emitChange()
	}

	const setColor = (color: TColor) => {
		state = { ...state, color }
		window.localStorage.setItem(THEME_COLOR, color)
		emitChange()
	}

	const subscribe = (listener: () => void) => {
		listeners.add(listener)
		return () => listeners.delete(listener)
	}

	return { getState, setMode, setColor, subscribe }
}

export type TThemeStore = ReturnType<typeof createThemeStore> | null

/**
 * https://medium.com/@gronxb/react-context-api%EC%97%90%EC%84%9C-setstate%EB%A5%BC-%EB%93%B1%EB%A1%9D%ED%95%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94-b710b2053af8
 */
