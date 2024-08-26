'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { key } from 'src/_third-party/_firebase/auth/session/key'

export const create = async (uid: string) => {
	cookies().set(key, uid, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24, // 60초 60분 24시간 => 1일
		path: '/'
	})

	redirect('/')
}

export const remove = async () => {
	cookies().delete(key)

	redirect('/auth')
}
