'use client'

import React from 'react'
import { TSession } from 'type/session'
import { Session } from '../../provider/auth'

export const useUid = (): TSession => {
	const uid = React.useContext(Session)

	return uid
}
