'use client'

import React from 'react'
import { Session } from '../../provider/auth'

export const useUid = () => {
	const uid = React.useContext(Session)

	return uid
}
