'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { key } from './key'

export const create = async (uid: string) => {
	cookies().set(key, uid, {
		httpOnly: true,
		secure: true,
		path: '/'
	})

	redirect('/')
}

export const remove = async () => {
	cookies().delete(key)

	redirect('/auth')
}
