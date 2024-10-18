import { TColor, THandleMode } from 'type/theme'

export const MODE: THandleMode[] = ['system', 'light', 'dark']

export const MODE_TEXT: Record<THandleMode, string> = {
	system: '시스템 설정',
	light: '밝은 화면',
	dark: '어두운 화면'
}

export const PALETTE: TColor[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey']

export const PALETTE_TEXT: Record<TColor, string> = {
	red: '빨강',
	orange: '주황',
	yellow: '노랑',
	green: '초록',
	blue: '파랑',
	purple: '보라',
	grey: '회색'
}
